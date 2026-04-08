import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link className="logo" to="/">
              <span className="logo-wave">🌿</span>
              <span className="logo-text">ガジュマルのさんぽ</span>
            </Link>
            <p>のんびり歩くように、ラジオを楽しもう。<br />毎週月・木曜配信のラジオ番組です。</p>
            <div className="social-row">
              <a href="#" className="social-btn">𝕏 Twitter</a>
              <a href="#" className="social-btn">Discord</a>
              <a href="#" className="social-btn">📡 RSS</a>
            </div>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h4>番組</h4>
              <ul>
                <li><Link to="/">ホーム</Link></li>
                <li><Link to="/episodes">エピソード一覧</Link></li>
                <li><Link to="/hosts">パーソナリティ</Link></li>
                <li><Link to="/about">番組について</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>配信プラットフォーム</h4>
              <ul>
                <li><a href="#">Spotify</a></li>
                <li><a href="#">Apple Podcasts</a></li>
                <li><a href="#">YouTube</a></li>
                <li><a href="#">Amazon Music</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>その他</h4>
              <ul>
                <li><a href="#">スポンサー募集</a></li>
                <li><a href="#">ニュースレター登録</a></li>
                <li><a href="#">お問い合わせ</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} ガジュマルのさんぽ. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">プライバシーポリシー</a>
            <a href="#">利用規約</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
