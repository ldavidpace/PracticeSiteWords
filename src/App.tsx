import { useState } from 'react'
import FlashCards from './FlashCards'
import WordCatch from './WordCatch'
import WordRain from './WordRain'

type Screen = 'menu' | 'flashcards' | 'wordrain' | 'wordcatch'

export default function App() {
  const [screen, setScreen] = useState<Screen>('menu')

  if (screen === 'flashcards') {
    return <FlashCards onBack={() => setScreen('menu')} />
  }

  if (screen === 'wordrain') {
    return <WordRain onBack={() => setScreen('menu')} />
  }

  if (screen === 'wordcatch') {
    return <WordCatch onBack={() => setScreen('menu')} />
  }

  return (
    <div className="app">
      <header className="menu-header">
        <h1>Reading Practice</h1>
        <p className="menu-subtitle">Choose a game!</p>
      </header>

      <div className="game-cards">
        <button className="game-card" onClick={() => setScreen('flashcards')}>
          <span className="game-card-icon">🃏</span>
          <span className="game-card-title">Flash Cards</span>
          <span className="game-card-desc">Match words to pictures</span>
        </button>

        <button className="game-card" onClick={() => setScreen('wordrain')}>
          <span className="game-card-icon">🌧️</span>
          <span className="game-card-title">Word Rain</span>
          <span className="game-card-desc">Catch the falling words</span>
        </button>

        <button className="game-card" onClick={() => setScreen('wordcatch')}>
          <span className="game-card-icon">🏃</span>
          <span className="game-card-title">Word Catch</span>
          <span className="game-card-desc">Dodge and catch words</span>
        </button>
      </div>
    </div>
  )
}
