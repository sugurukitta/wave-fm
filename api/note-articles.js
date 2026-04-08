export default async function handler(req, res) {
  const NOTE_USER = 'ready_hawk8653'
  const page = req.query.page || 1

  try {
    const response = await fetch(
      `https://note.com/api/v2/creators/${NOTE_USER}/contents?kind=note&page=${page}`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0',
          'Accept': 'application/json',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`note API error: ${response.status}`)
    }

    const data = await response.json()

    // 5分間キャッシュ（新記事を素早く反映しつつサーバー負荷を抑える）
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
