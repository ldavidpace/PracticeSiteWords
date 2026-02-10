import { useCallback, useEffect, useRef, useState } from 'react';

import sightWords from './sightWords';
import { playSuccess, playWompWomp, speak } from './speak';

interface FallingWord {
  id: number
  word: string
  x: number // percentage across screen (0-100)
  y: number // pixels from top
  isTarget: boolean
  status: 'falling' | 'correct' | 'wrong'
}

type Phase = 'setup' | 'playing' | 'ended'

const DURATION_OPTIONS = [30, 60, 90]
const PLAY_AREA_HEIGHT = 500
const WORD_SPAWN_INTERVAL = 1200
const MIN_SPAWN_INTERVAL = 400
const SPAWN_DECREASE = 50
const BASE_SPEED = 80
const SPEED_INCREASE = 20
const TARGET_CHANCE = 0.35
const PLAYER_WIDTH = 12 // percentage width of the player hitbox
const PLAYER_SPEED = 55 // percentage per second for keyboard movement
const CATCH_ZONE_TOP = PLAY_AREA_HEIGHT - 60 // y threshold where collision starts
const MAX_LIVES = 3

interface WordCatchProps {
  onBack: () => void
}

export default function WordCatch({ onBack }: WordCatchProps) {
  const [phase, setPhase] = useState<Phase>('setup')
  const [targetWord, setTargetWord] = useState(() => {
    const words = sightWords.map((e) => e.word)
    return words[Math.floor(Math.random() * words.length)]
  })
  const [duration, setDuration] = useState(60)
  const [timeLeft, setTimeLeft] = useState(60)
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(MAX_LIVES)
  const [fallingWords, setFallingWords] = useState<FallingWord[]>([])
  const [wrongFlash, setWrongFlash] = useState(false)
  const [playerX, setPlayerX] = useState(50)
  const [endReason, setEndReason] = useState<'time' | 'lives'>('time')

  const nextIdRef = useRef(0)
  const animFrameRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)
  const lastSpawnRef = useRef<number>(0)
  const elapsedRef = useRef<number>(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const catchBoostRef = useRef(0)
  const playerXRef = useRef(50)
  const keysRef = useRef<{ left: boolean; right: boolean }>({ left: false, right: false })
  const livesRef = useRef(MAX_LIVES)
  const playAreaRef = useRef<HTMLDivElement>(null)
  const wordsRef = useRef<FallingWord[]>([])

  const allWords = useRef(sightWords.map((e) => e.word))

  const pickNewTarget = useCallback(() => {
    const words = allWords.current
    setTargetWord(words[Math.floor(Math.random() * words.length)])
  }, [])

  const startGame = useCallback(() => {
    speak(targetWord)
    setScore(0)
    setLives(MAX_LIVES)
    livesRef.current = MAX_LIVES
    setTimeLeft(duration)
    setFallingWords([])
    wordsRef.current = []
    setPlayerX(50)
    playerXRef.current = 50
    nextIdRef.current = 0
    elapsedRef.current = 0
    lastSpawnRef.current = 0
    lastTimeRef.current = 0
    catchBoostRef.current = 0
    keysRef.current = { left: false, right: false }
    setPhase('playing')
  }, [duration, targetWord])

  // Keyboard input
  useEffect(() => {
    if (phase !== 'playing') return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') keysRef.current.left = true
      if (e.key === 'ArrowRight') keysRef.current.right = true
    }
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') keysRef.current.left = false
      if (e.key === 'ArrowRight') keysRef.current.right = false
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [phase])

  // Pointer/touch input
  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (phase !== 'playing') return
    const area = playAreaRef.current
    if (!area) return
    const rect = area.getBoundingClientRect()
    const relX = ((e.clientX - rect.left) / rect.width) * 100
    const clamped = Math.max(PLAYER_WIDTH / 2, Math.min(100 - PLAYER_WIDTH / 2, relX))
    playerXRef.current = clamped
    setPlayerX(clamped)
  }, [phase])

  // Game loop
  useEffect(() => {
    if (phase !== 'playing') return

    const tick = (timestamp: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = timestamp
        lastSpawnRef.current = timestamp
      }

      const dt = (timestamp - lastTimeRef.current) / 1000
      lastTimeRef.current = timestamp
      elapsedRef.current += dt

      // Move player based on keyboard
      if (keysRef.current.left) {
        playerXRef.current = Math.max(PLAYER_WIDTH / 2, playerXRef.current - PLAYER_SPEED * dt)
        setPlayerX(playerXRef.current)
      }
      if (keysRef.current.right) {
        playerXRef.current = Math.min(100 - PLAYER_WIDTH / 2, playerXRef.current + PLAYER_SPEED * dt)
        setPlayerX(playerXRef.current)
      }

      const currentSpeed = BASE_SPEED + SPEED_INCREASE * (elapsedRef.current / 10) + catchBoostRef.current
      const pX = playerXRef.current

      // Spawn new words
      const spawnInterval = Math.max(MIN_SPAWN_INTERVAL, WORD_SPAWN_INTERVAL - SPAWN_DECREASE * (elapsedRef.current / 10))
      if (timestamp - lastSpawnRef.current > spawnInterval) {
        lastSpawnRef.current = timestamp
        const isTarget = Math.random() < TARGET_CHANCE
        let word: string
        if (isTarget) {
          word = targetWord
        } else {
          const distractors = allWords.current.filter((w) => w !== targetWord)
          word = distractors[Math.floor(Math.random() * distractors.length)]
        }
        const id = nextIdRef.current++
        const x = 5 + Math.random() * 80
        wordsRef.current.push({ id, word, x, y: -30, isTarget, status: 'falling' as const })
      }

      // Update positions and check collisions (imperatively via ref)
      let lostLife = false
      let gainedPoint = false
      const next: FallingWord[] = []

      for (const fw of wordsRef.current) {
        if (fw.status !== 'falling') continue

        const newY = fw.y + currentSpeed * dt

        // Check if word fell off bottom
        if (newY >= PLAY_AREA_HEIGHT + 50) {
          if (fw.isTarget) lostLife = true
          continue
        }

        // Check collision with player
        if (newY >= CATCH_ZONE_TOP && fw.y < CATCH_ZONE_TOP + 30) {
          const overlap = Math.abs(fw.x - pX) < PLAYER_WIDTH
          if (overlap) {
            if (fw.isTarget) {
              gainedPoint = true
            } else {
              lostLife = true
            }
            continue
          }
        }

        next.push({ ...fw, y: newY })
      }

      wordsRef.current = next
      setFallingWords(next)

      if (gainedPoint) {
        setScore((s) => s + 1)
        catchBoostRef.current += 15
        playSuccess()
      }

      if (lostLife) {
        playWompWomp()
        setWrongFlash(true)
        setTimeout(() => setWrongFlash(false), 300)
        livesRef.current -= 1
        setLives(livesRef.current)
        if (livesRef.current <= 0) {
          setEndReason('lives')
          setPhase('ended')
          return
        }
      }

      animFrameRef.current = requestAnimationFrame(tick)
    }

    animFrameRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      lastTimeRef.current = 0
    }
  }, [phase, targetWord])

  // Countdown timer
  useEffect(() => {
    if (phase !== 'playing') return

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setEndReason('time')
          setPhase('ended')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [phase])

  // Clean up on end
  useEffect(() => {
    if (phase === 'ended') {
      cancelAnimationFrame(animFrameRef.current)
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [phase])

  const handlePlayAgain = useCallback(() => {
    pickNewTarget()
    setPhase('setup')
  }, [pickNewTarget])

  // Setup phase
  if (phase === 'setup') {
    return (
      <div className="app">
        <header className="header">
          <button className="btn-back" onClick={onBack}>← Menu</button>
          <h1>Word Catch</h1>
          <div style={{ width: 70 }} />
        </header>

        <div className="card">
          <p className="instruction">Move your character to catch the right word!</p>
          <h2
            className="sight-word wr-target-word"
            onClick={() => speak(targetWord)}
          >
            {targetWord}
          </h2>
          <p className="wr-hint">Tap the word to hear it</p>

          <div className="wr-duration-picker">
            {DURATION_OPTIONS.map((d) => (
              <button
                key={d}
                className={`timer-btn ${d === duration ? 'timer-btn-active' : ''}`}
                onClick={() => { setDuration(d); setTimeLeft(d) }}
              >
                {d}s
              </button>
            ))}
          </div>

          <button className="btn-submit wr-play-btn" onClick={startGame}>
            Play!
          </button>

          <button
            className="timer-btn"
            style={{ marginTop: '0.75rem' }}
            onClick={() => { pickNewTarget() }}
          >
            Different Word
          </button>
        </div>
      </div>
    )
  }

  // End phase
  if (phase === 'ended') {
    return (
      <div className="app">
        <div className="card finished">
          <h1>{endReason === 'lives' ? 'Oh no, out of lives!' : 'Time\'s Up! 🎉'}</h1>
          <p className="score-final">
            You caught {score} word{score !== 1 ? 's' : ''}!
          </p>
          <button className="btn-restart" onClick={handlePlayAgain}>
            Play Again
          </button>
          <button className="btn-back" onClick={onBack}>
            Back to Menu
          </button>
        </div>
      </div>
    )
  }

  // Playing phase
  return (
    <div className="app">
      <header className="header">
        <button className="btn-back" onClick={onBack}>← Menu</button>
        <h1 className="wr-header-target" onClick={() => speak(targetWord)}>
          Catch: <span className="wr-target-inline">{targetWord}</span>
        </h1>
        <div className="wc-hud">
          <span className="wc-lives">
            {'❤️'.repeat(lives)}{'🖤'.repeat(MAX_LIVES - lives)}
          </span>
          <span className="score">⭐ {score}</span>
        </div>
      </header>

      <div className="wr-timer-bar">
        <span className={`timer-display ${timeLeft <= 10 ? 'timer-warning' : ''}`}>
          {timeLeft}s
        </span>
      </div>

      <div
        ref={playAreaRef}
        className={`wr-play-area ${wrongFlash ? 'wr-flash-wrong' : ''}`}
        style={{ height: PLAY_AREA_HEIGHT, touchAction: 'none' }}
        onPointerMove={handlePointerMove}
      >
        {fallingWords.map((fw) => (
          <div
            key={fw.id}
            className="wr-falling-word falling"
            style={{
              left: `${fw.x}%`,
              top: fw.y,
              pointerEvents: 'none',
            }}
          >
            {fw.word}
          </div>
        ))}

        <div
          className="wc-player"
          style={{ left: `${playerX}%` }}
        >
          🧒
        </div>
      </div>
    </div>
  )
}
