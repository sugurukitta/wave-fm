import { useNoteArticles } from '../hooks/useNoteArticles'
import './ColumnPage.css'

const NOTE_PROFILE_URL = 'https://note.com/ready_hawk8653'

const SkeletonCard = () => (
  <div className="column-card skeleton">
    <div className="column-card-body">
      <div className="skel skel-title" />
      <div className="skel skel-line" />
      <div className="skel skel-line skel-short" />
    </div>
    <div className="column-card-footer">
      <div className="skel skel-meta" />
    </div>
  </div>
)

const ColumnCard = ({ article }) => (
  <a
    href={article.url}
    target="_blank"
    rel="noopener noreferrer"
    className="column-card"
  >
    {article.eyecatch && (
      <div className="column-card-thumb">
        <img src={article.eyecatch} alt={article.title} loading="lazy" />
      </div>
    )}
    <div className="column-card-body">
      <h2 className="column-card-title">{article.title}</h2>
      {article.excerpt && (
        <p className="column-card-excerpt">{article.excerpt}</p>
      )}
      {article.tags.length > 0 && (
        <div className="column-card-tags">
          {article.tags.map((t) => (
            <span className="column-tag" key={t}>#{t}</span>
          ))}
        </div>
      )}
    </div>
    <div className="column-card-footer">
      <div className="column-author">
        <span className="column-author-icon">🌿</span>
        <span className="column-author-name">{article.author}</span>
      </div>
      <div className="column-meta">
        {article.date && <span className="column-date">{article.date}</span>}
        {article.date && <span className="column-sep">·</span>}
        <span className="column-read">{article.readMin}分で読める</span>
        {article.likeCount > 0 && (
          <>
            <span className="column-sep">·</span>
            <span className="column-like">♡ {article.likeCount}</span>
          </>
        )}
      </div>
    </div>
  </a>
)

const ColumnPage = () => {
  const { articles, loading, error } = useNoteArticles()

  return (
    <div className="column-page">
      <div className="column-page-inner">

        <div className="column-page-header">
          <div className="column-header-title-row">
            <div>
              <span className="page-tag">COLUMN</span>
              <h1>コラム</h1>
              <p>
                noteに投稿しているコラムの一覧です。
                新しい記事が投稿されると自動で反映されます。
              </p>
            </div>
            <a
              href={NOTE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="note-follow-btn"
            >
              <span className="note-logo-mark">n</span>
              noteをフォローする
            </a>
          </div>
        </div>

        {/* ローディング */}
        {loading && (
          <div className="column-grid">
            {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {/* エラー */}
        {error && !loading && (
          <div className="column-error">
            <span>😢</span>
            <p>記事の読み込みに失敗しました。</p>
            <p className="column-error-detail">{error}</p>
            <a href={NOTE_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="note-follow-btn">
              <span className="note-logo-mark">n</span>
              noteで直接確認する
            </a>
          </div>
        )}

        {/* 記事なし */}
        {!loading && !error && articles.length === 0 && (
          <div className="column-empty">
            <span>📝</span>
            <p>まだ記事がありません。</p>
            <a href={NOTE_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="note-follow-btn">
              <span className="note-logo-mark">n</span>
              noteをフォローして更新を待つ
            </a>
          </div>
        )}

        {/* 記事一覧 */}
        {!loading && !error && articles.length > 0 && (
          <>
            <div className="column-grid">
              {articles.map((article) => (
                <ColumnCard key={article.id} article={article} />
              ))}
            </div>
            <div className="column-more">
              <a
                href={NOTE_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="column-more-btn"
              >
                <span className="note-logo-mark">n</span>
                noteでもっと読む
              </a>
            </div>
          </>
        )}

      </div>
    </div>
  )
}

export default ColumnPage
