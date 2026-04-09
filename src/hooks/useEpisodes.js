import { useState, useEffect } from 'react'

const APPLE_PODCAST_ID = '1861681070'
const SPOTIFY_SHOW_ID  = '1AjJaPVapB5v1PpeFqWm1j'

function formatDuration(ms) {
  if (!ms) return ''
  const totalSec = Math.floor(ms / 1000)
  const min = Math.floor(totalSec / 60)
  const hr  = Math.floor(min / 60)
  if (hr > 0) return `${hr}時間${min % 60}分`
  return `${min}分`
}

function formatDate(isoString) {
  const d = new Date(isoString)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}

// "【第2歩】＜後編＞タイトル" → { num:"第2歩", part:"後編", title:"タイトル" }
function parseTitle(trackName) {
  const numMatch  = trackName.match(/【(.+?)】/)
  const partMatch = trackName.match(/[＜<](.+?)[＞>]/)
  const num  = numMatch  ? numMatch[1]  : ''
  const part = partMatch ? partMatch[1] : ''
  const title = trackName
    .replace(/【.+?】/, '')
    .replace(/[＜<].+?[＞>]/, '')
    .trim()
  return { num, part, title }
}

export function useEpisodes() {
  const [episodes, setEpisodes] = useState([])
  const [loading,  setLoading]  = useState(true)
  const [error,    setError]    = useState(null)

  useEffect(() => {
    const url =
      `https://itunes.apple.com/lookup` +
      `?id=${APPLE_PODCAST_ID}&entity=podcastEpisode&limit=200&country=jp`

    fetch(url)
      .then(r => {
        if (!r.ok) throw new Error(`APIエラー: ${r.status}`)
        return r.json()
      })
      .then(data => {
        const eps = data.results
          .filter(item => item.wrapperType === 'podcastEpisode')
          .map(ep => {
            const { num, part, title } = parseTitle(ep.trackName)
            return {
              id:              ep.trackId,
              num,
              part,
              title,
              fullTitle:       ep.trackName,
              date:            formatDate(ep.releaseDate),
              releaseTs:       new Date(ep.releaseDate).getTime(),
              duration:        formatDuration(ep.trackTimeMillis),
              description:     ep.description || ep.shortDescription || '',
              appleEpisodeId:  String(ep.trackId),
              appleUrl:        ep.trackViewUrl || `https://podcasts.apple.com/us/podcast/id${APPLE_PODCAST_ID}`,
              spotifyUrl:      `https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`,
              youtubeUrl:      'https://youtube.com/channel/UCuUfqBJAXMFKIVbo-0LPOvg',
              amazonUrl:       'https://x.gd/MfDnn',
            }
          })
          // 最新順に並べる
          .sort((a, b) => b.releaseTs - a.releaseTs)

        setEpisodes(eps)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { episodes, loading, error }
}
