import { useState, useEffect } from 'react'

export function useEpisodes() {
  const [episodes, setEpisodes] = useState([])
  const [loading,  setLoading]  = useState(true)
  const [error,    setError]    = useState(null)

  useEffect(() => {
    fetch('/api/episodes')
      .then(r => {
        if (!r.ok) throw new Error(`エラー: ${r.status}`)
        return r.json()
      })
      .then(data => {
        setEpisodes(data.episodes || [])
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { episodes, loading, error }
}
