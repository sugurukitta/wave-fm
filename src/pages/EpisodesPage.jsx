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

const APPLE_PODCAST_ID = '1861681070'

const EpisodesPage = () => {
  const [activePlatform, setActivePlatform] = useState('spotify')
  const [openEp, setOpenEp] = useState(null)
  const [playingEp, setPlayingEp] = useState(null)

  const toggleEp = (id) => {
    setOpenEp((prev) => (prev === id ? null : id))
    if (playingEp === id) setPlayingEp(null)
  }

  const togglePlay = (e, id) => {
    e.stopPropagation()
    setPlayingEp((prev) => (prev === id ? null : id))
    setOpenEp(id)
  }

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
              <div className="youtube-redirect">
                <div className="youtube-redirect-icon">▶️</div>
                <p className="youtube-redirect-title">YouTubeで視聴する</p>
                <p className="youtube-redirect-desc">
                  YouTubeのチャンネルページに移動して視聴できます。
                </p>
                <a
                  href="https://youtube.com/channel/UCuUfqBJAXMFKIVbo-0LPOvg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="youtube-open-btn"
                >
                  ▶️ YouTubeで開く →
                </a>
              </div>
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
                <div className="ep-archive-header-wrap">
                  <button
                    className={`ep-play-btn ${playingEp === ep.id ? 'playing' : ''}`}
                    onClick={(e) => togglePlay(e, ep.id)}
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
                </div>

                {/* 展開エリア */}
                {openEp === ep.id && (
                  <div className="ep-archive-body">

                    {/* インラインプレイヤー */}
                    {playingEp === ep.id && ep.appleEpisodeId && (
                      <div className="ep-inline-player">
                        <iframe
                          title={ep.title}
                          src={`https://embed.podcasts.apple.com/us/podcast/id${APPLE_PODCAST_ID}?i=${ep.appleEpisodeId}&theme=dark`}
                          height="175"
                          frameBorder="0"
                          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                          allow="autoplay *; encrypted-media *; clipboard-write"
                          style={{ width: '100%', borderRadius: '12px', background: 'transparent' }}
                        />
                      </div>
                    )}

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
