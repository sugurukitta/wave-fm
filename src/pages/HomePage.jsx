import Hero from '../components/Hero'
import EpisodeList from '../components/EpisodeList'

const HomePage = ({ searchQuery, onPlay, playingId }) => {
  return (
    <>
      <Hero />
      <EpisodeList searchQuery={searchQuery} onPlay={onPlay} playingId={playingId} />
    </>
  )
}

export default HomePage
