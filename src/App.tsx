import { useState, useCallback, useEffect } from 'react'
import sightWords, { type SightWordEntry } from './sightWords'
import { speak } from './speak'

function shuffle<T>(array: T[]): T[] {
  const a = [...array]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

type Feedback = 'correct' | 'wrong' | null

export default function App() {
  const [queue, setQueue] = useState<SightWordEntry[]>(() => shuffle(sightWords))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [feedback, setFeedback] = useState<Feedback>(null)
  const [score, setScore] = useState(0)
  const [total, setTotal] = useState(0)
  const [finished, setFinished] = useState(false)

  const current = queue[currentIndex]

  // Speak the sight word when it first appears
  useEffect(() => {
    if (!finished && current) {
      speak(current.word)
    }
  }, [currentIndex, finished, current])

  const handlePictureClick = useCallback(
    (index: number) => {
      if (feedback) return // ignore clicks during feedback
      const option = current.options[index]
      // Always speak the label of the clicked picture
      speak(option.label)

      const isCorrect = index === current.correctIndex
      setFeedback(isCorrect ? 'correct' : 'wrong')
      setTotal((t) => t + 1)
      if (isCorrect) {
        setScore((s) => s + 1)
      }
    },
    [current, feedback],
  )

  const advance = useCallback(() => {
    setFeedback(null)
    if (currentIndex + 1 >= queue.length) {
      setFinished(true)
    } else {
      setCurrentIndex((i) => i + 1)
    }
  }, [currentIndex, queue.length])

  const restart = useCallback(() => {
    setQueue(shuffle(sightWords))
    setCurrentIndex(0)
    setFeedback(null)
    setScore(0)
    setTotal(0)
    setFinished(false)
  }, [])

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
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Reading Practice</h1>
        <div className="score">
          ⭐ {score} / {total}
        </div>
      </header>

      <div className="card">
        <p className="instruction">Tap the picture that matches:</p>
        <h2 className="sight-word" onClick={() => speak(current.word)}>
          {current.word}
        </h2>
        <p className="hint">tap the word to hear it again</p>

        <div className="pictures">
          {current.options.map((option, i) => (
            <button
              key={i}
              className={`picture-btn ${
                feedback && i === current.correctIndex ? 'correct' : ''
              } ${feedback === 'wrong' && i !== current.correctIndex ? 'dim' : ''}`}
              onClick={() => handlePictureClick(i)}
            >
              <span className="emoji">{option.emoji}</span>
              <span className="picture-label">{option.label}</span>
            </button>
          ))}
        </div>

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
