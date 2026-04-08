import { useState } from 'react'
import { hosts } from '../data/episodes'
import icon from '../assets/icon.png'
import './Hero.css'

const PLATFORMS = [
  { label: 'Spotify',       icon: '🎵', url: 'https://open.spotify.com/show/1AjJaPVapB5v1PpeFqWm1j' },
  { label: 'Apple Podcasts',icon: '🎙️', url: 'https://podcasts.apple.com/us/podcast/ガジュマルのさんぽ/id1861681070' },
  { label: 'YouTube',       icon: '▶️', url: 'https://youtube.com/channel/UCuUfqBJAXMFKIVbo-0LPOvg?si=8Kwv9geyjggWV744' },
  { label: 'Amazon Music',  icon: '🎶', url: 'https://x.gd/MfDnn' },
]

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="hero">
      <div className="hero-inner">

        {/* 左カラム：テキスト情報 */}
        <div className="hero-text">
          <div className="hero-badge">毎週月・木 配信中</div>

          <h1 className="hero-title">
            <span className="hero-show-name">ガジュマルのさんぽ</span>
          </h1>

          <p className="hero-tagline">
            のんびり歩くように、ラジオを楽しもう。
          </p>

          <p className="hero-desc">
            再エネを作る仕事をしている3人が、日常のそばにある、<br />
            実はまだよく知らない世界を探求する番組です。
          </p>

          <div className="schedule-badges">
            <div className="schedule-badge short">
              <span className="badge-dot" />
              <div>
                <strong>毎週月曜</strong>
                <span>〜15分 ショートニュース</span>
              </div>
            </div>
            <div className="schedule-badge long">
              <span className="badge-dot" />
              <div>
                <strong>毎週木曜</strong>
                <span>〜60分 ロングトーク</span>
              </div>
            </div>
          </div>

          <div className="platforms">
            <span className="platforms-label">配信中のプラットフォーム</span>
            <div className="platform-btns">
            {PLATFORMS.map((p) => (
              <a
                key={p.label}
                href={p.url}
                target={p.url !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="platform-btn"
              >
                <span>{p.icon}</span> {p.label}
              </a>
            ))}
            </div>
          </div>

          <div className="hosts-row">
            <span className="hosts-label">パーソナリティ</span>
            <div className="host-chips">
              {hosts.map((h) => (
                <div className="host-chip" key={h.name} style={{ '--host-color': h.color }}>
                  <span className="host-chip-emoji">{h.emoji}</span>
                  <div>
                    <strong>{h.name}</strong>
                    <span>{h.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 右カラム：番組アイコン */}
        <div className="hero-icon-wrap">
          <div className="hero-icon-ring hero-icon-ring-outer" />
          <div className="hero-icon-ring hero-icon-ring-inner" />
          <button
            className="hero-icon-frame hero-icon-btn"
            onClick={() => setModalOpen(true)}
            aria-label="アイコンについて"
            title="アイコンについて"
          >
            <img src={icon} alt="ガジュマルのさんぽ" className="hero-icon-img" />
            <div className="hero-icon-hint">？</div>
          </button>
          <div className="hero-icon-label">
            <span className="hero-icon-dot" />
            ON AIR
          </div>
        </div>

      </div>

      {/* モーダル */}
      {modalOpen && (
        <div className="icon-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="icon-modal" onClick={(e) => e.stopPropagation()}>
            <div className="icon-modal-img">
              <img src={icon} alt="ガジュマルのさんぽ" />
            </div>
            <div className="icon-modal-body">
              <h3>🌿 アイコンについて</h3>
              <p>
                私たちのラジオ番組のシンボルとして、沖縄のガジュマルの木と、そこに宿るとされる<strong>キジムナー</strong>という精霊をアイコンにしています。
              </p>
              <p>
                ガジュマルは豊かな自然の象徴であり、キジムナーはその森を守る精霊として語り継がれてきました。それはまさに、私たちが目指す持続可能な未来や自然との共生を象徴する存在でもあります。
              </p>
              <p>
                このように、番組を通じて環境やエネルギーについて考えるきっかけを、ガジュマルとキジムナーの物語とともにお届けできれば嬉しいです。
              </p>
            </div>
            <button className="icon-modal-close" onClick={() => setModalOpen(false)}>
              ✕
            </button>
          </div>
        </div>
      )}

    </section>
  )
}

export default Hero
