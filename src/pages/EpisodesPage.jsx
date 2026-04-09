import { useState } from 'react'
import { useEpisodes } from '../hooks/useEpisodes'
import './EpisodesPage.css'

const SPOTIFY_SHOW_ID  = '1AjJaPVapB5v1PpeFqWm1j'
const APPLE_PODCAST_ID = '1861681070'

const PLATFORMS = [
  { label: 'Spotify',        id: 'spotify', color: '#1DB954' },
  { label: 'Apple Podcasts', id: 'apple',   color: '#fc3c44' },
  { label: 'YouTube',        id: 'youtube', color: '#FF0000' },
  { label: 'Amazon Music',   id: 'amazon',  color: '#00A8E1' },
]

/* ── スケルトン ── */
const SkeletonCard = () => (
  <div className="ep-archive-card">
    <div className="ep-skeleton-card">
      <div className="ep-skel-row">
        <div className="ep-skel ep-skel-num" />
        <div className="ep-skel-meta">
          <div className="ep-skel ep-skel-title" />
          <div className="ep-skel ep-skel-sub" />
        </div>
      </div>
    </div>
  </div>
)

const EpisodesPage = () => {
  const { episodes, loading, error } = useEpisodes()

  const [activePlatform, setActivePlatform] = useState('spotify')
  const [openEp,         setOpenEp]         = useState(null)
  const [playingEp,      setPlayingEp]      = useState(null)
  const [searchQuery,    setSearchQuery]    = useState('')
  const [sortOrder,      setSortOrder]      = useState('newest')

  const toggleEp = (id) => {
    setOpenEp(prev => prev === id ? null : id)
    if (playingEp === id) setPlayingEp(null)
  }

  const togglePlay = (e, id) => {
    e.stopPropagation()
    setPlayingEp(prev => prev === id ? null : id)
    setOpenEp(id)
  }

  const filtered = episodes
    .filter(ep => {
      if (!searchQuery.trim()) return true
      const q = searchQuery.toLowerCase()
      return (
        ep.title.toLowerCase().includes(q) ||
        ep.fullTitle.toLowerCase().includes(q) ||
        ep.description.toLowerCase().includes(q)
      )
    })
    .sort((a, b) =>
      sortOrder === 'newest' ? b.releaseTs - a.releaseTs : a.releaseTs - b.releaseTs
    )

  return (
    <div className="ep-page">
      <div className="ep-page-inner">

        {/* ヘッダー */}
        <div className="ep-page-header">
          <span className="page-tag">EPISODES</span>
          <h1>エピソード一覧</h1>
          <p>全エピソードをこのページで直接再生できます。</p>
        </div>

        {/* プレイヤーエリア */}
        <div className="player-section">
          <div className="player-platform-tabs">
            {PLATFORMS.map(p => (
              <button
                key={p.id}
                className={`platform-tab ${activePlatform === p.id ? 'active' : ''}`}
                style={{ '--platform-color': p.color }}
                onClick={() => setActivePlatform(p.id)}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="player-embed-wrap">
            {activePlatform === 'spotify' && (
              <iframe
                title="Spotify Player"
                src={`https://open.spotify.com/embed/show/${SPOTIFY_SHOW_ID}?utm_source=generator&theme=0`}
                width="100%" height="352" frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy" className="embed-player"
              />
            )}
            {activePlatform === 'apple' && (
              <iframe
                title="Apple Podcasts Player"
                src={`https://embed.podcasts.apple.com/us/podcast/id${APPLE_PODCAST_ID}?itsct=podcast_box_player&itscg=30200&ls=1&theme=dark`}
                height="450" frameBorder="0"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                allow="autoplay *; encrypted-media *; clipboard-write"
                className="embed-player"
                style={{ width: '100%', overflow: 'hidden', borderRadius: '12px', background: 'transparent' }}
              />
            )}
            {activePlatform === 'youtube' && (
              <div className="youtube-redirect">
                <div className="youtube-redirect-icon">▶️</div>
                <p className="youtube-redirect-title">YouTubeで視聴する</p>
                <p className="youtube-redirect-desc">YouTubeのチャンネルページに移動して視聴できます。</p>
                <a href="https://youtube.com/channel/UCuUfqBJAXMFKIVbo-0LPOvg"
                  target="_blank" rel="noopener noreferrer" className="youtube-open-btn">
                  ▶️ YouTubeで開く →
                </a>
              </div>
            )}
            {activePlatform === 'amazon' && (
              <div className="amazon-redirect">
                <p>Amazon Musicはアプリ内での再生になります。</p>
                <a href="https://x.gd/MfDnn"
                  target="_blank" rel="noopener noreferrer" className="amazon-open-btn">
                  Amazon Musicで開く →
                </a>
              </div>
            )}
          </div>
        </div>

        {/* エピソード詳細一覧 */}
        <div className="ep-archive">

          {/* 検索・ソート */}
          <div className="ep-controls">
            <div className="ep-search-wrap">
              <span className="ep-search-icon">🔍</span>
              <input
                type="text"
                className="ep-search-input"
                placeholder="タイトル・キーワードで検索..."
                value={searchQuery}
                onChange={e => { setSearchQuery(e.target.value); setOpenEp(null) }}
              />
              {searchQuery && (
                <button className="ep-search-clear" onClick={() => setSearchQuery('')}>✕</button>
              )}
            </div>
            <div className="ep-sort-btns">
              <button
                className={`ep-sort-btn ${sortOrder === 'newest' ? 'active' : ''}`}
                onClick={() => setSortOrder('newest')}
              >新しい順</button>
              <button
                className={`ep-sort-btn ${sortOrder === 'oldest' ? 'active' : ''}`}
                onClick={() => setSortOrder('oldest')}
              >古い順</button>
            </div>
          </div>

          {/* 件数 */}
          {!loading && !error && (
            <div className="ep-result-info">
              {searchQuery
                ? <span>{filtered.length}件ヒット <span className="ep-query-text">「{searchQuery}」</span></span>
                : <span>全{filtered.length}件</span>
              }
            </div>
          )}

          {/* エラー */}
          {error && (
            <div className="ep-fetch-error">
              <span>⚠️</span>
              <p>エピソードの取得に失敗しました。</p>
              <p className="ep-fetch-error-detail">{error}</p>
            </div>
          )}

          <div className="ep-archive-list">
            {/* ローディング */}
            {loading && [...Array(4)].map((_, i) => <SkeletonCard key={i} />)}

            {/* 検索結果なし */}
            {!loading && !error && filtered.length === 0 && (
              <div className="ep-no-result">
                <span>🔍</span>
                <p>「{searchQuery}」に一致するエピソードが見つかりませんでした。</p>
              </div>
            )}

            {/* エピソードカード */}
            {!loading && !error && filtered.map(ep => (
              <div key={ep.id} className={`ep-archive-card ${openEp === ep.id ? 'open' : ''}`}>

                <div className="ep-archive-header-wrap">
                  <button
                    className={`ep-play-btn ${playingEp === ep.id ? 'playing' : ''}`}
                    onClick={e => togglePlay(e, ep.id)}
                    aria-label={playingEp === ep.id ? '停止' : '再生'}
                    title={playingEp === ep.id ? '停止' : 'このエピソードを再生'}
                  >
                    {playingEp === ep.id ? '■' : '▶'}
                  </button>
                  <button
                    className="ep-archive-header"
                    onClick={() => toggleEp(ep.id)}
                    aria-expanded={openEp === ep.id}
                  >
                    <div className="ep-archive-num">
                      {ep.num && <span className="ep-step">{ep.num}</span>}
                      {ep.part && <span className="ep-part">{ep.part}</span>}
                    </div>
                    <div className="ep-archive-meta">
                      <span className="ep-archive-title-text">{ep.title || ep.fullTitle}</span>
                      <div className="ep-archive-sub">
                        <span>{ep.date}</span>
                        {ep.duration && <><span>·</span><span>{ep.duration}</span></>}
                      </div>
                    </div>
                    <span className="ep-archive-chevron">{openEp === ep.id ? '▲' : '▼'}</span>
                  </button>
                </div>

                {openEp === ep.id && (
                  <div className="ep-archive-body">
                    {/* インラインプレイヤー */}
                    {playingEp === ep.id && ep.appleEpisodeId && (
                      <div className="ep-inline-player">
                        <iframe
                          title={ep.title}
                          src={`https://embed.podcasts.apple.com/us/podcast/id${APPLE_PODCAST_ID}?i=${ep.appleEpisodeId}&theme=dark`}
                          height="175" frameBorder="0"
                          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                          allow="autoplay *; encrypted-media *; clipboard-write"
                          style={{ width: '100%', borderRadius: '12px', background: 'transparent' }}
                        />
                      </div>
                    )}

                    {ep.description && (
                      <p className="ep-archive-desc">{ep.description}</p>
                    )}

                    <div className="ep-archive-platforms">
                      <span className="ep-platforms-label">このエピソードを聴く</span>
                      <div className="ep-platform-btns">
                        <a href={ep.spotifyUrl} target="_blank" rel="noopener noreferrer" className="ep-platform-btn spotify">🎵 Spotify</a>
                        <a href={ep.appleUrl}   target="_blank" rel="noopener noreferrer" className="ep-platform-btn apple">🎙️ Apple Podcasts</a>
                        <a href={ep.youtubeUrl} target="_blank" rel="noopener noreferrer" className="ep-platform-btn youtube">▶️ YouTube</a>
                        <a href={ep.amazonUrl}  target="_blank" rel="noopener noreferrer" className="ep-platform-btn amazon">🎶 Amazon Music</a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default EpisodesPage
