import { useState, useEffect } from 'react'

export const useNoteArticles = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true)
        setError(null)

        const res = await fetch('/api/note-articles')
        if (!res.ok) throw new Error('記事の取得に失敗しました')

        const json = await res.json()
        if (json.error) throw new Error(json.error)

        setArticles(json.articles ?? [])
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  return { articles, loading, error }
}
