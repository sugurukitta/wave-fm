const RSS_URL = 'https://note.com/ready_hawk8653/rss/'

// RSSのXMLをパース
const parseRSS = (xml) => {
  const items = []
  const itemBlocks = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]

  for (const block of itemBlocks) {
    const raw = block[1]

    const get = (tag) =>
      raw.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`))?.[1]?.trim() ?? ''

    const title = get('title')
    const link  = get('link') || get('guid')
    const pubDate = get('pubDate')
    const creatorName  = raw.match(/<note:creatorName>([\s\S]*?)<\/note:creatorName>/)?.[1]?.trim() ?? ''
    const creatorImage = raw.match(/<note:creatorImage>([\s\S]*?)<\/note:creatorImage>/)?.[1]?.trim() ?? ''
    const mediaUrl     = raw.match(/<media:thumbnail[^>]+url="([^"]+)"/)?.[1] ?? ''

    // CDATA内のHTMLからプレーンテキストの抜粋を作る
    const cdataHtml = raw.match(/<description>\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*<\/description>/)?.[1] ?? ''
    const plainText = cdataHtml
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<[^>]+>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/\s+/g, ' ')
      .trim()
    const excerpt = plainText.slice(0, 120) + (plainText.length > 120 ? '…' : '')

    // 日付フォーマット
    const dateObj = pubDate ? new Date(pubDate) : null
    const dateJa  = dateObj
      ? `${dateObj.getFullYear()}年${dateObj.getMonth() + 1}月${dateObj.getDate()}日`
      : ''

    // 読了時間（300文字/分）
    const readMin = Math.max(1, Math.ceil(plainText.length / 300))

    // 記事IDをURLから取得
    const id = link.match(/\/n\/([a-z0-9]+)$/)?.[1] ?? link

    items.push({
      id,
      title,
      excerpt,
      author: creatorName,
      authorImage: creatorImage,
      eyecatch: mediaUrl || null,
      date: dateJa,
      readMin,
      likeCount: 0,
      tags: [],
      url: link,
    })
  }

  return items
}

export default async function handler(req, res) {
  try {
    const response = await fetch(RSS_URL, {
      headers: { 'User-Agent': 'Mozilla/5.0', Accept: 'application/rss+xml, application/xml' },
    })

    if (!response.ok) throw new Error(`RSS fetch error: ${response.status}`)

    const xml = await response.text()
    const articles = parseRSS(xml)

    // チャンネル情報も取得
    const channelTitle = xml.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim() ?? ''

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json({ articles, channelTitle })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
