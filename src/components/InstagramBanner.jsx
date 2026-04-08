import './InstagramBanner.css'

const INSTAGRAM_URL = 'https://www.instagram.com/gajumarunosampo'

const InstagramBanner = () => (
  <section className="ig-banner-section">
    <div className="ig-banner-inner">
      <div className="ig-banner-card">

        <div className="ig-banner-left">
          <div className="ig-logo-wrap">
            <svg className="ig-logo-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="url(#ig-grad)" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4.5" stroke="url(#ig-grad)" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig-grad)"/>
              <defs>
                <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#f9ce34"/>
                  <stop offset="0.35" stopColor="#ee2a7b"/>
                  <stop offset="1" stopColor="#6228d7"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="ig-banner-text">
            <p className="ig-banner-label">Instagram</p>
            <p className="ig-banner-handle">@gajumarunosampo</p>
            <p className="ig-banner-desc">
              番組の裏話や収録の様子、エネルギーにまつわる豆知識などを発信中。ぜひフォローしてください！
            </p>
          </div>
        </div>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ig-follow-btn"
        >
          フォローする
        </a>

      </div>
    </div>
  </section>
)

export default InstagramBanner
