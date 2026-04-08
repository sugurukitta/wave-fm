import { useState, useEffect } from 'react'

const NOTE_PROFILE_URL = 'https://note.com/ready_hawk8653'

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}

const estimateReadMin = (body) => {
  if (!body) return 3
  // 日本語は1分300文字を目安
  const min = Math.ceil(body.length / 300)
  return Math.max(1, Math.min(min, 30))
}

export const useNoteArticles = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true)
        setError(null)

        const res = await fetch('/api/note-articles?page=1')
        if (!res.ok) throw new Error('記事の取得に失敗しました')

        const json = await res.json()
        const contents = json?.data?.contents ?? []

        const formatted = contents.map((item) => ({
          id: item.id,
          title: item.name || item.title || '',
          excerpt: item.description || item.body?.slice(0, 120) || '',
          author: item.user?.nickname || item.user?.name || 'ガジュマルのさんぽ',
          date: formatDate(item.publishAt),
          readMin: estimateReadMin(item.body),
          likeCount: item.likeCount ?? 0,
          eyecatch: item.eyecatch || null,
          url: item.noteUrl || `${NOTE_PROFILE_URL}/${item.key}`,
          tags: item.hashtags?.map((h) => h.hashtag?.name ?? h).filter(Boolean) ?? [],
        }))

        setArticles(formatted)
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
