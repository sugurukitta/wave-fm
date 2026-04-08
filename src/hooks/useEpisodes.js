import { useState, useEffect } from 'react'

export const useEpisodes = () => {
  const [episodes, setEpisodes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        setLoading(true)
        setError(null)

        const res = await fetch('/api/episodes')
        if (!res.ok) throw new Error('エピソードの取得に失敗しました')

        const json = await res.json()
        if (json.error) throw new Error(json.error)

        setEpisodes(json.episodes ?? [])
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchEpisodes()
  }, [])

  return { episodes, loading, error }
}
