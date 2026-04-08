import './ColumnPage.css'

const columns = [
  {
    id: 1,
    title: '太陽光パネルの上で、カエルが鳴いていた',
    excerpt: '現場に行くたびに気づくことがある。再エネの設備は、いつの間にか自然の一部になっている。今日はそんな話をしたい。',
    author: '田中 翔',
    authorEmoji: '🎙️',
    date: '2026年3月28日',
    readMin: 4,
    tags: ['再エネ', '現場日記', '自然'],
    url: 'https://note.com',
    likeCount: 82,
  },
  {
    id: 2,
    title: '「電気はどこから来るの？」子どもに聞かれて詰まった話',
    excerpt: '我が子に「電気はどこから来るの？」と聞かれた。毎日再エネの仕事をしているのに、うまく答えられなかった。そのことが、ずっと頭に残っている。',
    author: '山田 花',
    authorEmoji: '🎧',
    date: '2026年3月14日',
    readMin: 6,
    tags: ['エネルギー', '日常', '子育て'],
    url: 'https://note.com',
    likeCount: 134,
  },
  {
    id: 3,
    title: '風車の音は、思ったより静かだった',
    excerpt: '「風車はうるさい」というイメージを持っている人は多い。でも実際に近くに立ってみると、それは意外なほど静かで、むしろ気持ちよかった。',
    author: '鈴木 一郎',
    authorEmoji: '🎵',
    date: '2026年2月28日',
    readMin: 5,
    tags: ['風力発電', '現場日記'],
    url: 'https://note.com',
    likeCount: 97,
  },
  {
    id: 4,
    title: '再エネの仕事を選んだ理由、正直に話します',
    excerpt: '「なんで再エネなの？」とよく聞かれる。カッコいい答えを用意していたけど、今日は本当のことを書こうと思う。',
    author: '田中 翔',
    authorEmoji: '🎙️',
    date: '2026年2月10日',
    readMin: 7,
    tags: ['キャリア', 'エネルギー', '本音'],
    url: 'https://note.com',
    likeCount: 201,
  },
  {
    id: 5,
    title: '蓄電池って、結局どんな仕組み？図解で説明してみた',
    excerpt: '番組リスナーから「蓄電池の仕組みがよくわからない」という声が多く届いた。専門用語なしで、できるだけわかりやすく説明してみます。',
    author: '山田 花',
    authorEmoji: '🎧',
    date: '2026年1月24日',
    readMin: 8,
    tags: ['蓄電池', '解説', '入門'],
    url: 'https://note.com',
    likeCount: 156,
  },
  {
    id: 6,
    title: '日本の再エネ、世界と比べると実はこんな位置にいる',
    excerpt: '「日本の再エネは遅れている」とよく言われる。本当にそうなのか？データを見ながら、等身大で考えてみた。',
    author: '鈴木 一郎',
    authorEmoji: '🎵',
    date: '2026年1月8日',
    readMin: 9,
    tags: ['データ', '世界比較', '政策'],
    url: 'https://note.com',
    likeCount: 188,
  },
]

const ColumnPage = () => {
  return (
    <div className="column-page">
      <div className="column-page-inner">

        <div className="column-page-header">
          <div className="column-header-title-row">
            <div>
              <span className="page-tag">COLUMN</span>
              <h1>コラム</h1>
              <p>3人がnoteに書いているコラムの一覧です。</p>
            </div>
            <a
              href="https://note.com"
              target="_blank"
              rel="noopener noreferrer"
              className="note-follow-btn"
            >
              <span className="note-logo-mark">n</span>
              noteをフォローする
            </a>
          </div>
        </div>

        <div className="column-grid">
          {columns.map((col) => (
            <a
              key={col.id}
              href={col.url}
              target="_blank"
              rel="noopener noreferrer"
              className="column-card"
            >
              <div className="column-card-body">
                <h2 className="column-card-title">{col.title}</h2>
                <p className="column-card-excerpt">{col.excerpt}</p>
                <div className="column-card-tags">
                  {col.tags.map((t) => (
                    <span className="column-tag" key={t}>#{t}</span>
                  ))}
                </div>
              </div>
              <div className="column-card-footer">
                <div className="column-author">
                  <span className="column-author-emoji">{col.authorEmoji}</span>
                  <span className="column-author-name">{col.author}</span>
                </div>
                <div className="column-meta">
                  <span className="column-date">{col.date}</span>
                  <span className="column-sep">·</span>
                  <span className="column-read">{col.readMin}分で読める</span>
                  <span className="column-sep">·</span>
                  <span className="column-like">♡ {col.likeCount}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="column-more">
          <a
            href="https://note.com"
            target="_blank"
            rel="noopener noreferrer"
            className="column-more-btn"
          >
            <span className="note-logo-mark">n</span>
            noteでもっと読む
          </a>
        </div>

      </div>
    </div>
  )
}

export default ColumnPage
