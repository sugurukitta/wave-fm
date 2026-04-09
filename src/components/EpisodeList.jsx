import { Link } from 'react-router-dom'
import { useEpisodes } from '../hooks/useEpisodes'
import './EpisodeList.css'

/* スケルトンカード */
const SkeletonCard = () => (
  <div className="ep-card-skeleton">
    <div className="ep-skel-badge" />
    <div className="ep-skel-body">
      <div className="ep-skel-line ep-skel-title" />
      <div className="ep-skel-line ep-skel-short" />
    </div>
  </div>
)

const EpisodeCard = ({ ep }) => (
  <Link to="/episodes" className="ep-card ep-card-link">
    <div className="ep-meta">
      <span className="ep-step-badge">
        {ep.num}{ep.part ? `〈${ep.part}〉` : ''}
      </span>
      <span className="ep-days">{ep.date}</span>
    </div>
    <div className="ep-body">
      <div className="ep-info">
        <h2 className="ep-title">{ep.title || ep.fullTitle}</h2>
        <p className="ep-desc">{ep.description}</p>
      </div>
      <div className="ep-actions">
        <div className="play-btn" aria-label="再生">▶</div>
        {ep.duration && <span className="ep-duration">{ep.duration}</span>}
      </div>
    </div>
  </Link>
)

const EpisodeList = () => {
  const { episodes, loading, error } = useEpisodes()
  const latest = episodes.slice(0, 3)

  return (
    <section className="ep-section">
      <div className="ep-section-inner">
        <div className="ep-section-header">
          <h2>最新エピソード</h2>
          <Link to="/episodes" className="view-all-link">すべて見る →</Link>
        </div>

        <div className="ep-list">
          {loading && [...Array(3)].map((_, i) => <SkeletonCard key={i} />)}

          {error && (
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', padding: '2rem 0' }}>
              エピソードの取得に失敗しました。
            </p>
          )}

          {!loading && !error && latest.map(ep => (
            <EpisodeCard key={ep.id} ep={ep} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EpisodeList
