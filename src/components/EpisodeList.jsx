import { Link } from 'react-router-dom'
import { episodes } from '../data/episodes'
import './EpisodeList.css'

const EpisodeCard = ({ ep }) => (
  <Link to="/episodes" className="ep-card ep-card-link">
    <div className="ep-meta">
      <span className="ep-step-badge">{ep.num}{ep.part ? `〈${ep.part}〉` : ''}</span>
      <span className="ep-days">{ep.date}</span>
    </div>
    <div className="ep-body">
      <div className="ep-info">
        <h2 className="ep-title">{ep.title}</h2>
        <p className="ep-desc">{ep.description}</p>
        <div className="ep-tags">
          {ep.tags.map((t) => (
            <span className="ep-tag" key={t}>#{t}</span>
          ))}
        </div>
      </div>
      <div className="ep-actions">
        <div className="play-btn" aria-label="再生">▶</div>
        <span className="ep-duration">{ep.duration}</span>
      </div>
    </div>
  </Link>
)

const EpisodeList = () => {
  return (
    <section className="ep-section">
      <div className="ep-section-inner">
        <div className="ep-section-header">
          <h2>最新エピソード</h2>
          <Link to="/episodes" className="view-all-link">すべて見る →</Link>
        </div>

        <div className="ep-list">
          {episodes.map((ep) => (
            <EpisodeCard key={ep.id} ep={ep} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EpisodeList
