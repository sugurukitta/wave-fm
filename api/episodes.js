const APPLE_PODCAST_ID = '1861681070'
const SPOTIFY_SHOW_ID  = '1AjJaPVapB5v1PpeFqWm1j'

function formatDuration(ms) {
  if (!ms) return ''
  const min = Math.floor(ms / 60000)
  const hr  = Math.floor(min / 60)
  return hr > 0 ? `${hr}時間${min % 60}分` : `${min}分`
}

function formatDate(iso) {
  const d = new Date(iso)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}

function parseTitle(name) {
  const num  = (name.match(/【(.+?)】/) || [])[1] || ''
  const part = (name.match(/[＜<](.+?)[＞>]/) || [])[1] || ''
  const title = name
    .replace(/【.+?】/, '')
    .replace(/[＜<].+?[＞>]/, '')
    .trim()
  return { num, part, title }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')

  try {
    const url = `https://itunes.apple.com/lookup?id=${APPLE_PODCAST_ID}&entity=podcastEpisode&limit=200`
    const r = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; PodcastFetcher/1.0)' },
    })

    if (!r.ok) throw new Error(`iTunes API error: ${r.status}`)

    const { results } = await r.json()

    const episodes = results
      .filter(x => x.wrapperType === 'podcastEpisode')
      .map(ep => {
        const { num, part, title } = parseTitle(ep.trackName)
        return {
          id:             ep.trackId,
          num,
          part,
          title,
          fullTitle:      ep.trackName,
          date:           formatDate(ep.releaseDate),
          releaseTs:      +new Date(ep.releaseDate),
          duration:       formatDuration(ep.trackTimeMillis),
          description:    ep.description || ep.shortDescription || '',
          appleEpisodeId: String(ep.trackId),
          appleUrl:       ep.trackViewUrl || `https://podcasts.apple.com/us/podcast/id${APPLE_PODCAST_ID}`,
          spotifyUrl:     `https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`,
          youtubeUrl:     'https://youtube.com/channel/UCuUfqBJAXMFKIVbo-0LPOvg',
          amazonUrl:      'https://x.gd/MfDnn',
        }
      })
      .sort((a, b) => b.releaseTs - a.releaseTs)

    res.status(200).json({ episodes })
  } catch (err) {
    console.error('Episodes fetch error:', err.message)
    res.status(500).json({ error: err.message, episodes: [] })
  }
}
