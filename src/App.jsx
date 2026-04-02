import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import EpisodeList from './components/EpisodeList'
import Player from './components/Player'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [playingEpisode, setPlayingEpisode] = useState(null)

  const handlePlay = (episode) => {
    if (playingEpisode?.id === episode.id) {
      setPlayingEpisode(null)
    } else {
      setPlayingEpisode(episode)
    }
  }

  return (
    <div style={{ paddingBottom: playingEpisode ? '90px' : 0 }}>
      <Header onSearch={setSearchQuery} />
      <main>
        <Hero />
        <EpisodeList
          searchQuery={searchQuery}
          onPlay={handlePlay}
          playingId={playingEpisode?.id}
        />
      </main>
      <Footer />
      <Player
        episode={playingEpisode}
        onClose={() => setPlayingEpisode(null)}
      />
    </div>
  )
}

export default App
