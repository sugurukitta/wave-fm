import { hosts } from '../data/episodes'
import icon from '../assets/icon.png'
import './Hero.css'

const PLATFORMS = [
  { label: 'Spotify', icon: '🎵' },
  { label: 'Apple Podcasts', icon: '🎙️' },
  { label: 'YouTube', icon: '▶️' },
  { label: 'Amazon Music', icon: '🎶' },
  { label: 'RSS', icon: '📡' },
]

const Hero = () => {
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
            「ガジュマルのさんぽ」は、最新の音楽シーンとデジタル音声の世界を語るラジオ番組です。
            毎週2回、<strong>ショートニュース</strong>と<strong>ロングトーク</strong>をお届けします。
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
                <a key={p.label} href="#" className="platform-btn">
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
          <div className="hero-icon-frame">
            <img src={icon} alt="ガジュマルのさんぽ" className="hero-icon-img" />
          </div>
          <div className="hero-icon-label">
            <span className="hero-icon-dot" />
            ON AIR
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
