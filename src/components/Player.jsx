import { useState, useEffect } from 'react'
import './Player.css'

const Player = ({ episode, onClose }) => {
  const [playing, setPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(80)

  useEffect(() => {
    setPlaying(true)
    setProgress(0)
  }, [episode?.id])

  useEffect(() => {
    if (!playing) return
    const timer = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 0.1))
    }, 300)
    return () => clearInterval(timer)
  }, [playing])

  if (!episode) return null

  return (
    <div className="player">
      <div className="player-inner">
        <div className="player-ep">
          <span className={`player-type-dot ${episode.type}`} />
          <div className="player-ep-info">
            <span className="player-ep-num">#{episode.id}</span>
            <span className="player-ep-title">{episode.title}</span>
          </div>
        </div>

        <div className="player-center">
          <div className="player-controls">
            <button className="ctrl-btn" title="15秒戻る">⏮ 15</button>
            <button
              className="ctrl-btn play-pause"
              onClick={() => setPlaying(!playing)}
              aria-label={playing ? '一時停止' : '再生'}
            >
              {playing ? '⏸' : '▶'}
            </button>
            <button className="ctrl-btn" title="15秒進む">15 ⏭</button>
          </div>
          <div className="player-progress-wrap">
            <span className="time-label">0:00</span>
            <div className="progress-bar" onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              setProgress(((e.clientX - rect.left) / rect.width) * 100)
            }}>
              <div className="progress-fill" style={{ width: `${progress}%` }} />
              <div className="progress-thumb" style={{ left: `${progress}%` }} />
            </div>
            <span className="time-label">{episode.duration}</span>
          </div>
        </div>

        <div className="player-right">
          <div className="volume-wrap">
            <span>🔊</span>
            <input
              type="range"
              min={0}
              max={100}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="volume-slider"
            />
          </div>
          <button className="ctrl-btn close-btn" onClick={onClose} aria-label="閉じる">✕</button>
        </div>
      </div>
    </div>
  )
}

export default Player
