import { useState } from 'react'
import { episodes, SPOTIFY_SHOW_ID } from '../data/episodes'
import './EpisodesPage.css'

const PLATFORMS = [
  { label: 'Spotify',        id: 'spotify',  color: '#1DB954' },
  { label: 'Apple Podcasts', id: 'apple',    color: '#fc3c44' },
  { label: 'YouTube',        id: 'youtube',  color: '#FF0000' },
  { label: 'Amazon Music',   id: 'amazon',   color: '#00A8E1' },
]

// チャンネルID UCuUfqBJAXMFKIVbo-0LPOvg → アップロード再生リスト UUuUfqBJAXMFKIVbo-0LPOvg
const YOUTUBE_PLAYLIST = 'UUuUfqBJAXMFKIVbo-0LPOvg'

const EpisodesPage = () => {
  const [activePlatform, setActivePlatform] = useState('spotify')
  const [openEp, setOpenEp] = useState(null)

  const toggleEp = (id) => setOpenEp((prev) => (prev === id ? null : id))

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
            {PLATFORMS.map((p) => (
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
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="embed-player"
              />
            )}
            {activePlatform === 'apple' && (
              <iframe
                title="Apple Podcasts Player"
                src="https://embed.podcasts.apple.com/us/podcast/id1861681070?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=dark"
                height="450"
                frameBorder="0"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                allow="autoplay *; encrypted-media *; clipboard-write"
                className="embed-player"
                style={{ width: '100%', overflow: 'hidden', borderRadius: '12px', background: 'transparent' }}
              />
            )}
            {activePlatform === 'youtube' && (
              <iframe
                title="YouTube Player"
                src={`https://www.youtube.com/embed/videoseries?list=${YOUTUBE_PLAYLIST}`}
                width="100%"
                height="400"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="embed-player"
              />
            )}
            {activePlatform === 'amazon' && (
              <div className="amazon-redirect">
                <p>Amazon Musicはアプリ内での再生になります。</p>
                <a
                  href="https://x.gd/MfDnn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="amazon-open-btn"
                >
                  Amazon Musicで開く →
                </a>
              </div>
            )}
          </div>
        </div>

        {/* エピソード詳細一覧 */}
        <div className="ep-archive">
          <h2 className="ep-archive-title">エピソード詳細</h2>
          <div className="ep-archive-list">
            {episodes.map((ep) => (
              <div key={ep.id} className={`ep-archive-card ${openEp === ep.id ? 'open' : ''}`}>

                {/* カードヘッダー（クリックで開閉） */}
                <button
                  className="ep-archive-header"
                  onClick={() => toggleEp(ep.id)}
                  aria-expanded={openEp === ep.id}
                >
                  <div className="ep-archive-num">
                    <span className="ep-step">{ep.num}</span>
                    {ep.part && <span className="ep-part">{ep.part}</span>}
                  </div>
                  <div className="ep-archive-meta">
                    <span className="ep-archive-title-text">{ep.title}</span>
                    <div className="ep-archive-sub">
                      <span>{ep.date}</span>
                      <span>·</span>
                      <span>{ep.duration}</span>
                    </div>
                  </div>
                  <div className="ep-archive-tags-row">
                    {ep.tags.map((t) => <span className="ep-tag" key={t}>#{t}</span>)}
                  </div>
                  <span className="ep-archive-chevron">{openEp === ep.id ? '▲' : '▼'}</span>
                </button>

                {/* 展開エリア */}
                {openEp === ep.id && (
                  <div className="ep-archive-body">
                    <p className="ep-archive-desc">{ep.description}</p>

                    {ep.refs.length > 0 && (
                      <div className="ep-refs">
                        <span className="ep-refs-label">📚 参考文献</span>
                        <ul>
                          {ep.refs.map((r) => (
                            <li key={r.url}>
                              <a href={r.url} target="_blank" rel="noopener noreferrer">
                                {r.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="ep-archive-platforms">
                      <span className="ep-platforms-label">このエピソードを聴く</span>
                      <div className="ep-platform-btns">
                        <a href={ep.spotifyUrl} target="_blank" rel="noopener noreferrer" className="ep-platform-btn spotify">
                          🎵 Spotify
                        </a>
                        <a href={ep.appleUrl} target="_blank" rel="noopener noreferrer" className="ep-platform-btn apple">
                          🎙️ Apple Podcasts
                        </a>
                        <a href={ep.youtubeUrl} target="_blank" rel="noopener noreferrer" className="ep-platform-btn youtube">
                          ▶️ YouTube
                        </a>
                        <a href={ep.amazonUrl} target="_blank" rel="noopener noreferrer" className="ep-platform-btn amazon">
                          🎶 Amazon Music
                        </a>
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
