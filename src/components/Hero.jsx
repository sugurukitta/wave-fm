import { useState } from 'react'
import { hosts } from '../data/episodes'
import icon from '../assets/icon.png'
import './Hero.css'

const SpotifyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 01-.277-1.215c3.809-.87 7.077-.496 9.712 1.115a.623.623 0 01.207.857zm1.223-2.722a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 01-.973-.517.781.781 0 01.517-.972c3.632-1.102 8.147-.568 11.236 1.326a.78.78 0 01.257 1.072zm.105-2.835c-3.223-1.914-8.54-2.09-11.618-1.156a.935.935 0 11-.543-1.79c3.532-1.072 9.404-.865 13.115 1.338a.936.936 0 01-1.027 1.573-.936.936 0 01-.927-.036z"/>
  </svg>
)

const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.317 2c.457.012 1.887.074 2.895 1.197.07.08.136.162.196.247a3.84 3.84 0 00-.576.205 3.104 3.104 0 00-1.613 1.695 3.484 3.484 0 00-.218 1.578 4.228 4.228 0 001.772-.447 3.838 3.838 0 001.415-1.24c.05-.07.098-.143.142-.218.407.609.538 1.377.34 2.097a3.463 3.463 0 01-.905 1.576A10.878 10.878 0 0117 9c.577.59.987 1.326 1.19 2.128.258 1.03.19 2.12-.195 3.11a8.578 8.578 0 01-1.442 2.463c-.424.524-.876 1.015-1.437 1.364-.56.35-1.225.533-1.9.527-.595-.005-1.17-.177-1.682-.5a4.83 4.83 0 00-1.068-.445 4.831 4.831 0 00-1.07.446 4.587 4.587 0 01-1.68.5c-.676.006-1.34-.177-1.9-.528-.562-.35-1.014-.84-1.438-1.364a8.582 8.582 0 01-1.441-2.462 6.805 6.805 0 01-.196-3.11A5.124 5.124 0 017 9a3.463 3.463 0 01-.902-1.575 3.48 3.48 0 01.34-2.097c.044.075.091.148.142.219a3.839 3.839 0 001.415 1.24 4.229 4.229 0 001.772.446 3.484 3.484 0 00-.218-1.578 3.104 3.104 0 00-1.613-1.695 3.84 3.84 0 00-.576-.205c.06-.085.126-.167.196-.247C8.564 3.385 9.613 2.97 10.656 2.49a4.75 4.75 0 011.661-.49z"/>
  </svg>
)

const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
)

const AmazonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705a.66.66 0 01-.76.074c-1.067-.886-1.257-1.296-1.845-2.142-1.764 1.799-3.012 2.338-5.299 2.338-2.707 0-4.813-1.671-4.813-5.011 0-2.609 1.415-4.384 3.431-5.252 1.748-.769 4.19-.906 6.057-1.118v-.418c0-.769.06-1.676-.391-2.338-.392-.594-1.148-.839-1.815-.839-1.232 0-2.328.634-2.597 1.946-.055.289-.269.574-.558.589l-3.124-.338c-.263-.059-.557-.271-.48-.674C5.942 2.016 9.052 1 11.832 1c1.42 0 3.276.378 4.394 1.454 1.42 1.334 1.284 3.108 1.284 5.042v4.562c0 1.371.568 1.974 1.103 2.714.187.262.228.577-.01.771-.595.498-1.655 1.42-2.237 1.937l-.222-.685z"/>
    <path d="M20.558 18.219c-2.222 1.648-5.452 2.525-8.229 2.525-3.892 0-7.398-1.44-10.052-3.834-.208-.188-.022-.444.228-.298 2.861 1.664 6.395 2.665 10.049 2.665 2.463 0 5.172-.511 7.661-1.57.376-.16.692.247.343.512z"/>
    <path d="M21.479 17.154c-.284-.364-1.878-.172-2.592-.087-.218.027-.251-.163-.055-.3 1.269-.892 3.353-.634 3.594-.336.241.3-.063 2.387-1.255 3.382-.183.153-.357.071-.276-.131.268-.67.868-2.165.584-2.528z"/>
  </svg>
)

const PLATFORMS = [
  {
    label: 'Spotify',
    Icon: SpotifyIcon,
    url: 'https://open.spotify.com/show/1AjJaPVapB5v1PpeFqWm1j',
    color: '#1DB954',
    bg: 'rgba(29,185,84,0.12)',
    border: 'rgba(29,185,84,0.35)',
  },
  {
    label: 'Apple Podcasts',
    Icon: AppleIcon,
    url: 'https://podcasts.apple.com/us/podcast/ガジュマルのさんぽ/id1861681070',
    color: '#fc3c44',
    bg: 'rgba(252,60,68,0.12)',
    border: 'rgba(252,60,68,0.35)',
  },
  {
    label: 'YouTube',
    Icon: YouTubeIcon,
    url: 'https://youtube.com/channel/UCuUfqBJAXMFKIVbo-0LPOvg?si=8Kwv9geyjggWV744',
    color: '#FF0000',
    bg: 'rgba(255,0,0,0.10)',
    border: 'rgba(255,0,0,0.32)',
  },
  {
    label: 'Amazon Music',
    Icon: AmazonIcon,
    url: 'https://x.gd/MfDnn',
    color: '#00A8E1',
    bg: 'rgba(0,168,225,0.12)',
    border: 'rgba(0,168,225,0.35)',
  },
]

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="hero">
      <div className="hero-inner">

        {/* 左カラム：テキスト情報 */}
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="hero-show-name">ガジュマルのさんぽ</span>
          </h1>

          <p className="hero-desc">
            再エネを作る仕事をしている3人が、日常のそばにある、<br />
            実はまだよく知らない世界を探求する番組です。
          </p>

          <div className="platforms">
            <span className="platforms-label">配信中のプラットフォーム</span>
            <div className="platform-btns">
              {PLATFORMS.map((p) => (
                <a
                  key={p.label}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="platform-btn"
                  style={{
                    '--p-color': p.color,
                    '--p-bg': p.bg,
                    '--p-border': p.border,
                  }}
                >
                  <span className="platform-btn-icon"><p.Icon /></span>
                  {p.label}
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
