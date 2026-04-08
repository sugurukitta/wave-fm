import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Player from './components/Player'
import HomePage from './pages/HomePage'
import EpisodesPage from './pages/EpisodesPage'
import HostsPage from './pages/HostsPage'
import AboutPage from './pages/AboutPage'
import ColumnPage from './pages/ColumnPage'
import './App.css'

const AppInner = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [playingEpisode, setPlayingEpisode] = useState(null)
  const location = useLocation()

  const handlePlay = (episode) => {
    setPlayingEpisode((prev) => prev?.id === episode.id ? null : episode)
  }

  return (
    <div style={{ paddingBottom: playingEpisode ? '90px' : 0 }}>
      <Header onSearch={setSearchQuery} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                searchQuery={searchQuery}
                onPlay={handlePlay}
                playingId={playingEpisode?.id}
              />
            }
          />
          <Route
            path="/episodes"
            element={
              <EpisodesPage
                onPlay={handlePlay}
                playingId={playingEpisode?.id}
              />
            }
          />
          <Route path="/hosts" element={<HostsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/column" element={<ColumnPage />} />
        </Routes>
      </main>
      <Footer />
      <Player
        episode={playingEpisode}
        onClose={() => setPlayingEpisode(null)}
      />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}

export default App
