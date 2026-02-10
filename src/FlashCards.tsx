import { useState, useCallback, useEffect, useRef } from 'react'
import sightWords, { type SightWordEntry } from './sightWords'
import { speak, cancelSpeech, playWompWomp, playSuccess } from './speak'

function shuffle<T>(array: T[]): T[] {
  const a = [...array]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** Shuffle the word order and randomize option positions within each word. */
function buildQueue(): SightWordEntry[] {
  return shuffle(sightWords).map((entry) => {
    const indices = shuffle(entry.options.map((_, i) => i))
    return {
      word: entry.word,
      options: indices.map((i) => entry.options[i]),
      correctIndex: indices.indexOf(entry.correctIndex),
    }
  })
}

type Feedback = 'correct' | 'wrong' | null

const TIMER_OPTIONS = [5, 10, 20] // minutes

interface FlashCardsProps {
  onBack: () => void
}

export default function FlashCards({ onBack }: FlashCardsProps) {
  const [queue, setQueue] = useState<SightWordEntry[]>(buildQueue)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [feedback, setFeedback] = useState<Feedback>(null)
  const [score, setScore] = useState(0)
  const [total, setTotal] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [finished, setFinished] = useState(false)

  // Timer state: null = no timer, number = seconds remaining
  const [timeLeft, setTimeLeft] = useState<number | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = useCallback((minutes: number) => {
    if (timerRef.current) clearInterval(timerRef.current)
    setTimeLeft(minutes * 60)
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(timerRef.current!)
          timerRef.current = null
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }, [])

  const clearTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = null
    setTimeLeft(null)
  }, [])

  // When timer hits 0, finish the game
  useEffect(() => {
    if (timeLeft === 0) {
      setFinished(true)
    }
  }, [timeLeft])

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const current = queue[currentIndex]

  const handlePictureClick = useCallback(
    (index: number) => {
      if (feedback) return // ignore clicks during feedback
      speak(current.options[index].label)
      setSelected(index)
    },
    [current, feedback],
  )

  const handleSubmit = useCallback(() => {
    if (selected === null || feedback) return
    cancelSpeech()
    const isCorrect = selected === current.correctIndex
    setFeedback(isCorrect ? 'correct' : 'wrong')
    setTotal((t) => t + 1)
    if (isCorrect) {
      setScore((s) => s + 1)
      playSuccess()
    } else {
      playWompWomp()
    }
  }, [selected, current, feedback])

  const advance = useCallback(() => {
    setFeedback(null)
    setSelected(null)
    if (currentIndex + 1 >= queue.length) {
      setFinished(true)
    } else {
      setCurrentIndex((i) => i + 1)
    }
  }, [currentIndex, queue.length])

  const restart = useCallback(() => {
    setQueue(buildQueue())
    setCurrentIndex(0)
    setFeedback(null)
    setSelected(null)
    setScore(0)
    setTotal(0)
    setFinished(false)
    clearTimer()
  }, [clearTimer])

  if (finished) {
    return (
      <div className="app">
        <div className="card finished">
          <h1>Great job! 🎉</h1>
          <p className="score-final">
            You got {score} out of {total} right!
          </p>
          <button className="btn-restart" onClick={restart}>
            Play Again
          </button>
          <button className="btn-back" onClick={onBack}>
            Back to Menu
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="header">
        <button className="btn-back" onClick={onBack}>← Menu</button>
        <h1>Flash Cards</h1>
        <div className="score">
          ⭐ {score} / {total}
        </div>
      </header>

      <div className="timer-bar">
        {timeLeft === null ? (
          <>
            <span className="timer-label">Timer:</span>
            {TIMER_OPTIONS.map((m) => (
              <button key={m} className="timer-btn" onClick={() => startTimer(m)}>
                {m} min
              </button>
            ))}
          </>
        ) : (
          <>
            <span className={`timer-display ${timeLeft <= 30 ? 'timer-warning' : ''}`}>
              {formatTime(timeLeft)}
            </span>
            <button className="timer-btn" onClick={clearTimer}>
              Cancel
            </button>
          </>
        )}
      </div>

      <div className="card">
        <p className="instruction">Tap the picture that matches:</p>
        <h2 className="sight-word">
          {current.word}
        </h2>

        <div className="pictures">
          {current.options.map((option, i) => (
            <button
              key={i}
              className={`picture-btn ${
                !feedback && i === selected ? 'selected' : ''
              } ${feedback && i === current.correctIndex ? 'correct' : ''
              } ${feedback === 'wrong' && i !== current.correctIndex ? 'dim' : ''}`}
              onClick={() => handlePictureClick(i)}
            >
              <span className="emoji">{option.emoji}</span>
            </button>
          ))}
        </div>

        {!feedback && (
          <button
            className="btn-submit"
            disabled={selected === null}
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}

        {feedback && (
          <div className={`feedback ${feedback}`}>
            <p>{feedback === 'correct' ? 'Yes! Great job! 🌟' : 'Not quite — try the next one!'}</p>
            <button className="btn-next" onClick={advance}>
              Next Word →
            </button>
          </div>
        )}
      </div>

      <div className="progress">
        {currentIndex + 1} of {queue.length}
      </div>
    </div>
  )
}
