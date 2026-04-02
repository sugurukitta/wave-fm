import { useState } from 'react'
import './Header.css'

const NAV_ITEMS = ['エピソード', 'ホスト', 'ニュースレター', '番組について']

const Header = ({ onSearch }) => {
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <header className="header">
      <div className="header-inner">
        <a className="logo" href="#">
          <span className="logo-wave">🌿</span>
          <span className="logo-text">ガジュマルのさんぽ</span>
        </a>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <a key={item} href="#" className="nav-link">{item}</a>
          ))}
        </nav>

        <div className="header-actions">
          {searchOpen ? (
            <form className="search-form" onSubmit={handleSearch}>
              <input
                autoFocus
                type="text"
                placeholder="エピソードを検索..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="button" className="icon-btn" onClick={() => { setSearchOpen(false); setQuery(''); onSearch('') }}>✕</button>
            </form>
          ) : (
            <button className="icon-btn" onClick={() => setSearchOpen(true)} aria-label="検索">
              🔍
            </button>
          )}
          <a href="#" className="nav-link discord-link">Discord</a>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
