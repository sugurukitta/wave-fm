const APPLE_PODCAST_ID = '1861681070'
const SPOTIFY_SHOW_ID = '1AjJaPVapB5v1PpeFqWm1j'
const YOUTUBE_CHANNEL_URL = 'https://youtube.com/channel/UCuUfqBJAXMFKIVbo-0LPOvg'
const AMAZON_URL = 'https://x.gd/MfDnn'

const formatDuration = (ms) => {
  if (!ms) return ''
  const totalSec = Math.floor(ms / 1000)
  const h = Math.floor(totalSec / 3600)
  const m = Math.floor((totalSec % 3600) / 60)
  const s = totalSec % 60
  if (h > 0) return `${h}時間${m}分`
  return `${m}分${s}秒`
}

const formatDateJa = (isoStr) => {
  if (!isoStr) return ''
  const d = new Date(isoStr)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}

export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://itunes.apple.com/lookup?id=${APPLE_PODCAST_ID}&entity=podcastEpisode&limit=200&country=jp`,
      { headers: { 'User-Agent': 'Mozilla/5.0' } }
    )

    if (!response.ok) throw new Error(`iTunes API error: ${response.status}`)

    const data = await response.json()

    const allEpisodes = data.results
      .filter((r) => r.kind === 'podcastEpisode')
      .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))

    const episodes = allEpisodes.map((ep, index) => ({
      id: String(ep.trackId),
      num: `#${allEpisodes.length - index}`,
      title: ep.trackName,
      date: formatDateJa(ep.releaseDate),
      duration: formatDuration(ep.trackTimeMillis),
      description: ep.description || '',
      tags: [],
      refs: [],
      spotifyUrl: `https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`,
      appleUrl: ep.trackViewUrl || `https://podcasts.apple.com/jp/podcast/id${APPLE_PODCAST_ID}`,
      youtubeUrl: YOUTUBE_CHANNEL_URL,
      amazonUrl: AMAZON_URL,
    }))

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json({ episodes })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
