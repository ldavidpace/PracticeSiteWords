export interface PictureOption {
  emoji: string
  label: string
}

export interface SightWordEntry {
  word: string
  correctIndex: number
  options: PictureOption[]
}

// First-grade Dolch sight words paired with emoji picture choices.
// Each entry has 4 picture options; `correctIndex` points to the match.
const sightWords: SightWordEntry[] = [
  {
    word: 'dog',
    correctIndex: 0,
    options: [
      { emoji: '🐶', label: 'dog' },
      { emoji: '🐱', label: 'cat' },
      { emoji: '🐟', label: 'fish' },
      { emoji: '🐦', label: 'bird' },
    ],
  },
  {
    word: 'cat',
    correctIndex: 1,
    options: [
      { emoji: '🐶', label: 'dog' },
      { emoji: '🐱', label: 'cat' },
      { emoji: '🐸', label: 'frog' },
      { emoji: '🐰', label: 'rabbit' },
    ],
  },
  {
    word: 'run',
    correctIndex: 0,
    options: [
      { emoji: '🏃', label: 'run' },
      { emoji: '🛌', label: 'sleep' },
      { emoji: '🍽️', label: 'eat' },
      { emoji: '📖', label: 'read' },
    ],
  },
  {
    word: 'big',
    correctIndex: 2,
    options: [
      { emoji: '🐜', label: 'small' },
      { emoji: '🐇', label: 'fast' },
      { emoji: '🐘', label: 'big' },
      { emoji: '🐢', label: 'slow' },
    ],
  },
  {
    word: 'red',
    correctIndex: 1,
    options: [
      { emoji: '🟦', label: 'blue' },
      { emoji: '🟥', label: 'red' },
      { emoji: '🟩', label: 'green' },
      { emoji: '🟨', label: 'yellow' },
    ],
  },
  {
    word: 'blue',
    correctIndex: 0,
    options: [
      { emoji: '🟦', label: 'blue' },
      { emoji: '🟥', label: 'red' },
      { emoji: '🟧', label: 'orange' },
      { emoji: '🟪', label: 'purple' },
    ],
  },
  {
    word: 'fish',
    correctIndex: 2,
    options: [
      { emoji: '🐶', label: 'dog' },
      { emoji: '🐦', label: 'bird' },
      { emoji: '🐟', label: 'fish' },
      { emoji: '🐛', label: 'bug' },
    ],
  },
  {
    word: 'play',
    correctIndex: 3,
    options: [
      { emoji: '📖', label: 'read' },
      { emoji: '😴', label: 'sleep' },
      { emoji: '🍽️', label: 'eat' },
      { emoji: '⚽', label: 'play' },
    ],
  },
  {
    word: 'sun',
    correctIndex: 0,
    options: [
      { emoji: '☀️', label: 'sun' },
      { emoji: '🌧️', label: 'rain' },
      { emoji: '⭐', label: 'star' },
      { emoji: '🌙', label: 'moon' },
    ],
  },
  {
    word: 'rain',
    correctIndex: 1,
    options: [
      { emoji: '☀️', label: 'sun' },
      { emoji: '🌧️', label: 'rain' },
      { emoji: '❄️', label: 'snow' },
      { emoji: '🌈', label: 'rainbow' },
    ],
  },
  {
    word: 'tree',
    correctIndex: 0,
    options: [
      { emoji: '🌳', label: 'tree' },
      { emoji: '🌸', label: 'flower' },
      { emoji: '🍄', label: 'mushroom' },
      { emoji: '🌵', label: 'cactus' },
    ],
  },
  {
    word: 'eat',
    correctIndex: 2,
    options: [
      { emoji: '🏃', label: 'run' },
      { emoji: '😴', label: 'sleep' },
      { emoji: '🍽️', label: 'eat' },
      { emoji: '✍️', label: 'write' },
    ],
  },
  {
    word: 'jump',
    correctIndex: 1,
    options: [
      { emoji: '🚶', label: 'walk' },
      { emoji: '🤸', label: 'jump' },
      { emoji: '🏊', label: 'swim' },
      { emoji: '🧗', label: 'climb' },
    ],
  },
  {
    word: 'green',
    correctIndex: 3,
    options: [
      { emoji: '🟥', label: 'red' },
      { emoji: '🟦', label: 'blue' },
      { emoji: '🟨', label: 'yellow' },
      { emoji: '🟩', label: 'green' },
    ],
  },
  {
    word: 'walk',
    correctIndex: 0,
    options: [
      { emoji: '🚶', label: 'walk' },
      { emoji: '🏃', label: 'run' },
      { emoji: '🤸', label: 'jump' },
      { emoji: '💃', label: 'dance' },
    ],
  },
  {
    word: 'happy',
    correctIndex: 0,
    options: [
      { emoji: '😊', label: 'happy' },
      { emoji: '😢', label: 'sad' },
      { emoji: '😠', label: 'angry' },
      { emoji: '😴', label: 'sleepy' },
    ],
  },
  {
    word: 'book',
    correctIndex: 2,
    options: [
      { emoji: '🖊️', label: 'pen' },
      { emoji: '🎒', label: 'backpack' },
      { emoji: '📖', label: 'book' },
      { emoji: '📺', label: 'TV' },
    ],
  },
  {
    word: 'water',
    correctIndex: 1,
    options: [
      { emoji: '🔥', label: 'fire' },
      { emoji: '💧', label: 'water' },
      { emoji: '🪨', label: 'rock' },
      { emoji: '🌬️', label: 'wind' },
    ],
  },
  {
    word: 'star',
    correctIndex: 3,
    options: [
      { emoji: '🌙', label: 'moon' },
      { emoji: '☀️', label: 'sun' },
      { emoji: '☁️', label: 'cloud' },
      { emoji: '⭐', label: 'star' },
    ],
  },
  {
    word: 'house',
    correctIndex: 0,
    options: [
      { emoji: '🏠', label: 'house' },
      { emoji: '🏫', label: 'school' },
      { emoji: '⛺', label: 'tent' },
      { emoji: '🏰', label: 'castle' },
    ],
  },
  {
    word: 'bird',
    correctIndex: 2,
    options: [
      { emoji: '🐝', label: 'bee' },
      { emoji: '🦋', label: 'butterfly' },
      { emoji: '🐦', label: 'bird' },
      { emoji: '🐛', label: 'bug' },
    ],
  },
  {
    word: 'car',
    correctIndex: 1,
    options: [
      { emoji: '🚂', label: 'train' },
      { emoji: '🚗', label: 'car' },
      { emoji: '✈️', label: 'plane' },
      { emoji: '🚢', label: 'boat' },
    ],
  },
  {
    word: 'apple',
    correctIndex: 0,
    options: [
      { emoji: '🍎', label: 'apple' },
      { emoji: '🍌', label: 'banana' },
      { emoji: '🍇', label: 'grapes' },
      { emoji: '🍊', label: 'orange' },
    ],
  },
  {
    word: 'stop',
    correctIndex: 3,
    options: [
      { emoji: '▶️', label: 'go' },
      { emoji: '⏩', label: 'fast' },
      { emoji: '🔄', label: 'again' },
      { emoji: '🛑', label: 'stop' },
    ],
  },
  {
    word: 'sleep',
    correctIndex: 1,
    options: [
      { emoji: '🏃', label: 'run' },
      { emoji: '😴', label: 'sleep' },
      { emoji: '🍽️', label: 'eat' },
      { emoji: '💃', label: 'dance' },
    ],
  },
  {
    word: 'flower',
    correctIndex: 2,
    options: [
      { emoji: '🌳', label: 'tree' },
      { emoji: '🍀', label: 'clover' },
      { emoji: '🌸', label: 'flower' },
      { emoji: '🌿', label: 'leaf' },
    ],
  },
  {
    word: 'moon',
    correctIndex: 0,
    options: [
      { emoji: '🌙', label: 'moon' },
      { emoji: '☀️', label: 'sun' },
      { emoji: '⭐', label: 'star' },
      { emoji: '☁️', label: 'cloud' },
    ],
  },
  {
    word: 'school',
    correctIndex: 3,
    options: [
      { emoji: '🏠', label: 'house' },
      { emoji: '🏥', label: 'hospital' },
      { emoji: '🏪', label: 'store' },
      { emoji: '🏫', label: 'school' },
    ],
  },
  {
    word: 'swim',
    correctIndex: 1,
    options: [
      { emoji: '🏃', label: 'run' },
      { emoji: '🏊', label: 'swim' },
      { emoji: '🚴', label: 'bike' },
      { emoji: '🤸', label: 'jump' },
    ],
  },
  {
    word: 'snow',
    correctIndex: 2,
    options: [
      { emoji: '🌧️', label: 'rain' },
      { emoji: '☀️', label: 'sun' },
      { emoji: '❄️', label: 'snow' },
      { emoji: '🌪️', label: 'storm' },
    ],
  },
]

export default sightWords
