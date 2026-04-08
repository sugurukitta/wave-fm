import { useState } from 'react'
import { episodes } from '../data/episodes'
import './EpisodesPage.css'

const EpisodeRow = ({ ep, onPlay, isPlaying }) => (
  <article className={`ep-row ${isPlaying ? 'playing' : ''}`}>
    <div className="ep-row-num">#{ep.id}</div>
    <div className={`ep-row-type ${ep.type}`}>{ep.typeLabel}</div>
    <div className="ep-row-main">
      <h3 className="ep-row-title">{ep.title}</h3>
      <p className="ep-row-desc">{ep.desc}</p>
      <div className="ep-row-meta">
        <div className="ep-row-people">
          {ep.hosts.map((h) => <span className="ep-person host" key={h}>{h}</span>)}
          {ep.guests?.map((g) => <span className="ep-person guest" key={g}>{g}</span>)}
        </div>
        <div className="ep-row-tags">
          {ep.tags.map((t) => <span className="ep-tag" key={t}>{t}</span>)}
        </div>
      </div>
    </div>
    <div className="ep-row-right">
      <span className="ep-row-days">{ep.daysAgo}</span>
      <span className="ep-row-dur">{ep.duration}</span>
      <button
        className={`ep-row-play ${isPlaying ? 'active' : ''}`}
        onClick={() => onPlay(ep)}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
    </div>
  </article>
)

const EpisodesPage = ({ onPlay, playingId }) => {
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = episodes.filter((ep) => {
    const matchType = filter === 'all' || ep.type === filter
    const matchQ = !query || ep.title.includes(query) || ep.desc.includes(query) || ep.tags.some(t => t.includes(query))
    return matchType && matchQ
  })

  return (
    <div className="ep-page">
      <div className="ep-page-inner">
        <div className="ep-page-header">
          <h1>エピソード一覧</h1>
          <p>これまでに配信したすべてのエピソードをご覧いただけます。</p>
        </div>

        <div className="ep-page-controls">
          <div className="ep-filter-tabs">
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
          <div className="ep-search">
            <span>🔍</span>
            <input
              type="text"
              placeholder="エピソードを検索..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="ep-count">
          {filtered.length} 件のエピソード
        </div>

        <div className="ep-rows">
          {filtered.length === 0 ? (
            <div className="ep-empty">
              <span>🔍</span>
              <p>「{query}」に一致するエピソードが見つかりません。</p>
            </div>
          ) : (
            filtered.map((ep) => (
              <EpisodeRow
                key={ep.id}
                ep={ep}
                onPlay={onPlay}
                isPlaying={playingId === ep.id}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default EpisodesPage
