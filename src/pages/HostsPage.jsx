import { hosts } from '../data/episodes'
import './HostsPage.css'

const hostDetails = [
  {
    name: '田中 翔',
    nameEn: 'Sho Tanaka',
    role: 'メインパーソナリティ',
    emoji: '🎙️',
    color: '#6c63ff',
    bio: '元FM局アナウンサー。ラジオ業界歴12年。テクノロジーと音楽に精通。\n大学時代に放送研究会でラジオの楽しさを知り、卒業後に地元FMへ入社。現在はフリーランスとして活動しながら、ポッドキャストの可能性を広げる活動をしている。\n「声だけで伝えるって、実はすごく豊かな表現なんです」がモットー。',
    favorites: ['ジャズ', 'SF小説', 'コーヒー巡り'],
    links: [
      { label: 'Twitter', url: '#' },
      { label: 'note', url: '#' },
    ],
  },
  {
    name: '山田 花',
    nameEn: 'Hana Yamada',
    role: 'パーソナリティ',
    emoji: '🎧',
    color: '#ff6b9d',
    bio: 'ポッドキャスター・ライター。音声コンテンツのマネタイズ研究家。\n音楽雑誌の編集者を経て独立。現在は複数のポッドキャストに出演しながら、音声メディアについての執筆・講演も行っている。\n「聴くことは、想像することだと思う」という言葉を大切に、リスナーの想像力を刺激するトークを心がけている。',
    favorites: ['インディーポップ', 'カフェ巡り', 'フィルム写真'],
    links: [
      { label: 'Twitter', url: '#' },
      { label: 'Instagram', url: '#' },
    ],
  },
  {
    name: '鈴木 一郎',
    nameEn: 'Ichiro Suzuki',
    role: 'パーソナリティ',
    emoji: '🎵',
    color: '#48cfad',
    bio: '音楽プロデューサー出身。邦楽・洋楽問わず最新チャートをウォッチ中。\n学生時代からDJとして活動し、様々なアーティストのサポートを経験。現在は楽曲制作・プロデュースと並行してラジオに出演。\n「音楽の話題なら24時間語れます」と公言するほどの熱量で、リスナーを巻き込むトークが人気。',
    favorites: ['シティポップ', 'レコード収集', '夜のドライブ'],
    links: [
      { label: 'Twitter', url: '#' },
      { label: 'SoundCloud', url: '#' },
    ],
  },
]

const HostsPage = () => {
  return (
    <div className="hosts-page">
      <div className="hosts-page-inner">
        <div className="hosts-page-header">
          <span className="page-tag">PERSONALITY</span>
          <h1>パーソナリティ紹介</h1>
          <p>「ガジュマルのさんぽ」をお届けする3人をご紹介します。</p>
        </div>

        <div className="host-cards">
          {hostDetails.map((h) => (
            <div className="host-card" key={h.name} style={{ '--color': h.color }}>
              <div className="host-card-top">
                <div className="host-avatar" style={{ background: `${h.color}22`, border: `2px solid ${h.color}44` }}>
                  <span>{h.emoji}</span>
                </div>
                <div className="host-card-identity">
                  <span className="host-card-role">{h.role}</span>
                  <h2 className="host-card-name">{h.name}</h2>
                  <span className="host-card-name-en">{h.nameEn}</span>
                </div>
              </div>

              <div className="host-card-bio">
                {h.bio.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              <div className="host-card-favorites">
                <span className="host-card-section-label">好きなもの</span>
                <div className="favorite-chips">
                  {h.favorites.map((f) => (
                    <span className="favorite-chip" key={f}>{f}</span>
                  ))}
                </div>
              </div>

              <div className="host-card-links">
                {h.links.map((l) => (
                  <a key={l.label} href={l.url} className="host-link-btn">
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HostsPage
