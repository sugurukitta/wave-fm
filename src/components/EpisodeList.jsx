import { useState } from 'react'
import { episodes } from '../data/episodes'
import './EpisodeList.css'

const EpisodeCard = ({ ep, onPlay, isPlaying }) => (
  <article className={`ep-card ${isPlaying ? 'playing' : ''}`}>
    <div className="ep-meta">
      <span className={`ep-type-badge ${ep.type}`}>{ep.typeLabel}</span>
      <span className="ep-num">#{ep.id}</span>
      <span className="ep-days">{ep.daysAgo}</span>
    </div>

    <div className="ep-body">
      <div className="ep-info">
        <h2 className="ep-title">{ep.title}</h2>
        <p className="ep-desc">{ep.desc}</p>

        <div className="ep-people">
          {ep.hosts.map((h) => (
            <span className="ep-person host" key={h}>{h}</span>
          ))}
          {ep.guests?.map((g) => (
            <span className="ep-person guest" key={g}>{g}</span>
          ))}
        </div>

        <div className="ep-tags">
          {ep.tags.map((t) => (
            <span className="ep-tag" key={t}>{t}</span>
          ))}
        </div>
      </div>

      <div className="ep-actions">
        <button
          className={`play-btn ${isPlaying ? 'active' : ''}`}
          onClick={() => onPlay(ep)}
          aria-label={isPlaying ? '一時停止' : '再生'}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        <span className="ep-duration">{ep.duration}</span>
      </div>
    </div>
  </article>
)

const EpisodeList = ({ searchQuery, onPlay, playingId }) => {
  const [filter, setFilter] = useState('all')

  const filtered = episodes.filter((ep) => {
    const matchType = filter === 'all' || ep.type === filter
    const matchSearch = !searchQuery ||
      ep.title.includes(searchQuery) ||
      ep.desc.includes(searchQuery) ||
      ep.tags.some((t) => t.includes(searchQuery))
    return matchType && matchSearch
  })

  return (
    <section className="ep-section">
      <div className="ep-section-inner">
        <div className="ep-section-header">
          <h2>最新エピソード</h2>
          <div className="filter-tabs">
            {[
              { value: 'all', label: 'すべて' },
              { value: 'short', label: 'ショートニュース' },
              { value: 'long', label: 'ロングトーク' },
            ].map((f) => (
              <button
                key={f.value}
                className={`filter-tab ${filter === f.value ? 'active' : ''}`}
                onClick={() => setFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="no-results">
            <span>🔍</span>
            <p>「{searchQuery}」に一致するエピソードが見つかりません。</p>
          </div>
        ) : (
          <div className="ep-list">
            {filtered.map((ep) => (
              <EpisodeCard
                key={ep.id}
                ep={ep}
                onPlay={onPlay}
                isPlaying={playingId === ep.id}
              />
            ))}
          </div>
        )}

        <div className="load-more-wrap">
          <button className="load-more-btn">もっと見る</button>
        </div>
      </div>
    </section>
  )
}

export default EpisodeList
