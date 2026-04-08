import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import EpisodesPage from './pages/EpisodesPage'
import HostsPage from './pages/HostsPage'
import AboutPage from './pages/AboutPage'
import ColumnPage from './pages/ColumnPage'
import './App.css'

const AppInner = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()

  return (
    <div>
      <Header onSearch={setSearchQuery} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/episodes" element={<EpisodesPage />} />
          <Route path="/hosts" element={<HostsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/column" element={<ColumnPage />} />
        </Routes>
      </main>
      <Footer />
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
