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

const DURATION_OPTIONS = [30, 60, 90] // seconds
const PLAY_AREA_HEIGHT = 500
const WORD_SPAWN_INTERVAL = 1200 // starting ms between spawns
const MIN_SPAWN_INTERVAL = 400 // fastest spawn rate
const SPAWN_DECREASE = 50 // ms faster per 10 seconds elapsed
const BASE_SPEED = 80 // pixels per second
const SPEED_INCREASE = 20 // additional px/s per 10 seconds elapsed
const TARGET_CHANCE = 0.35

interface WordRainProps {
  onBack: () => void
}

export default function WordRain({ onBack }: WordRainProps) {
  const [phase, setPhase] = useState<Phase>('setup')
  const [targetWord, setTargetWord] = useState(() => {
    const words = sightWords.map((e) => e.word)
    return words[Math.floor(Math.random() * words.length)]
  })
  const [duration, setDuration] = useState(60)
  const [timeLeft, setTimeLeft] = useState(60)
  const [score, setScore] = useState(0)
  const [fallingWords, setFallingWords] = useState<FallingWord[]>([])
  const [wrongFlash, setWrongFlash] = useState(false)
  const [endReason, setEndReason] = useState<'time' | 'missed'>('time')

  const nextIdRef = useRef(0)
  const animFrameRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)
  const lastSpawnRef = useRef<number>(0)
  const elapsedRef = useRef<number>(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const missedTargetRef = useRef(false)
  const catchBoostRef = useRef(0)

  const allWords = useRef(sightWords.map((e) => e.word))

  const pickNewTarget = useCallback(() => {
    const words = allWords.current
    setTargetWord(words[Math.floor(Math.random() * words.length)])
  }, [])

  const startGame = useCallback(() => {
    speak(targetWord)
    setScore(0)
    setTimeLeft(duration)
    setFallingWords([])
    nextIdRef.current = 0
    elapsedRef.current = 0
    lastSpawnRef.current = 0
    lastTimeRef.current = 0
    missedTargetRef.current = false
    catchBoostRef.current = 0
    setPhase('playing')
  }, [duration, targetWord])

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

      const currentSpeed = BASE_SPEED + SPEED_INCREASE * (elapsedRef.current / 10) + catchBoostRef.current

      // Spawn new words (interval shrinks over time)
      const spawnInterval = Math.max(MIN_SPAWN_INTERVAL, WORD_SPAWN_INTERVAL - SPAWN_DECREASE * (elapsedRef.current / 10))
      if (timestamp - lastSpawnRef.current > spawnInterval) {
        lastSpawnRef.current = timestamp
        setFallingWords((prev) => {
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
          return [...prev, { id, word, x, y: -30, isTarget, status: 'falling' as const }]
        })
      }

      // Update positions and remove off-screen words
      setFallingWords((prev) =>
        prev
          .map((fw) => {
            if (fw.status !== 'falling') return fw
            return { ...fw, y: fw.y + currentSpeed * dt }
          })
          .filter((fw) => {
            if (fw.status === 'correct' || fw.status === 'wrong') return false
            if (fw.y >= PLAY_AREA_HEIGHT + 50) {
              if (fw.isTarget) missedTargetRef.current = true
              return false
            }
            return true
          })
      )

      if (missedTargetRef.current) {
        setEndReason('missed')
        setPhase('ended')
        return
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

  // Clean up animation on end
  useEffect(() => {
    if (phase === 'ended') {
      cancelAnimationFrame(animFrameRef.current)
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [phase])

  const handleWordTap = useCallback((fw: FallingWord) => {
    if (fw.status !== 'falling') return

    if (fw.isTarget) {
      setScore((s) => s + 1)
      catchBoostRef.current += 15
      playSuccess()
      setFallingWords((prev) =>
        prev.map((w) => (w.id === fw.id ? { ...w, status: 'correct' as const } : w))
      )
    } else {
      playWompWomp()
      setWrongFlash(true)
      setTimeout(() => setWrongFlash(false), 300)
      setFallingWords((prev) =>
        prev.map((w) => (w.id === fw.id ? { ...w, status: 'wrong' as const } : w))
      )
    }
  }, [])

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
          <h1>Word Rain</h1>
          <div style={{ width: 70 }} />
        </header>

        <div className="card">
          <p className="instruction">Tap the falling words that match:</p>
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
          <h1>{endReason === 'missed' ? 'Oh no, one got away!' : 'Time\'s Up! 🎉'}</h1>
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
          Find: <span className="wr-target-inline">
            {sightWords.find(
              w => targetWord === w.word
            )?.options.find(
              o => o.label === targetWord
            )?.emoji}
          </span>
        </h1>
        <div className="score">⭐ {score}</div>
      </header>

      <div className="wr-timer-bar">
        <span className={`timer-display ${timeLeft <= 10 ? 'timer-warning' : ''}`}>
          {timeLeft}s
        </span>
      </div>

      <div className={`wr-play-area ${wrongFlash ? 'wr-flash-wrong' : ''}`} style={{ height: PLAY_AREA_HEIGHT }}>
        {fallingWords.map((fw) => (
          <button
            key={fw.id}
            className={`wr-falling-word ${fw.status}`}
            style={{
              left: `${fw.x}%`,
              top: fw.y,
            }}
            onPointerDown={() => handleWordTap(fw)}
          >
            {fw.word}
          </button>
        ))}
      </div>
    </div>
  )
}
