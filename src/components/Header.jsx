import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logoImg from '../assets/logo.png'
import './Header.css'

const NAV_ITEMS = [
  { label: 'ホーム', to: '/' },
  { label: 'エピソード', to: '/episodes' },
  { label: 'パーソナリティ', to: '/hosts' },
  { label: '番組について', to: '/about' },
  { label: 'お問い合わせ', to: '/contact' },
]

const NOTE_URL = 'https://note.com/ready_hawk8653'

const Header = ({ onSearch }) => {
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(query)
    navigate('/')
    setSearchOpen(false)
  }

  return (
    <header className="header">
      <div className="header-inner">
        <NavLink className="logo" to="/" onClick={() => setMenuOpen(false)}>
          <img src={logoImg} alt="ガジュマルのさんぽ" className="logo-img" />
        </NavLink>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={NOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link nav-note-link"
            onClick={() => setMenuOpen(false)}
          >
            コラム <span className="nav-badge">note</span>
          </a>
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
