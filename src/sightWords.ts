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

  // === Word Wall Unit 1 ===
  {
    word: 'was',
    correctIndex: 0,
    options: [
      { emoji: '🦕', label: 'was' },
      { emoji: '🏃', label: 'is' },
      { emoji: '🚀', label: 'will' },
      { emoji: '❌', label: 'not' },
    ],
  },
  {
    word: 'for',
    correctIndex: 1,
    options: [
      { emoji: '⬅️', label: 'from' },
      { emoji: '🎁', label: 'for' },
      { emoji: '4️⃣', label: 'four' },
      { emoji: '🌟', label: 'far' },
    ],
  },
  {
    word: 'of',
    correctIndex: 2,
    options: [
      { emoji: '📴', label: 'off' },
      { emoji: '🔛', label: 'on' },
      { emoji: '🍕', label: 'of' },
      { emoji: '🤔', label: 'if' },
    ],
  },
  {
    word: 'put',
    correctIndex: 0,
    options: [
      { emoji: '📥', label: 'put' },
      { emoji: '✂️', label: 'cut' },
      { emoji: '🦶', label: 'kick' },
      { emoji: '🏃', label: 'run' },
    ],
  },
  {
    word: 'you',
    correctIndex: 1,
    options: [
      { emoji: '🙋', label: 'me' },
      { emoji: '👉', label: 'you' },
      { emoji: '👥', label: 'them' },
      { emoji: '👤', label: 'he' },
    ],
  },
  {
    word: 'push',
    correctIndex: 2,
    options: [
      { emoji: '🫳', label: 'pull' },
      { emoji: '👋', label: 'wave' },
      { emoji: '🫸', label: 'push' },
      { emoji: '✋', label: 'stop' },
    ],
  },
  {
    word: 'or',
    correctIndex: 3,
    options: [
      { emoji: '➕', label: 'and' },
      { emoji: '🚫', label: 'not' },
      { emoji: '➡️', label: 'then' },
      { emoji: '🔀', label: 'or' },
    ],
  },

  // === Word Wall Unit 2 ===
  {
    word: 'my',
    correctIndex: 0,
    options: [
      { emoji: '🙋', label: 'my' },
      { emoji: '👉', label: 'your' },
      { emoji: '👤', label: 'his' },
      { emoji: '👥', label: 'our' },
    ],
  },
  {
    word: 'talk',
    correctIndex: 1,
    options: [
      { emoji: '👂', label: 'listen' },
      { emoji: '🗣️', label: 'talk' },
      { emoji: '📖', label: 'read' },
      { emoji: '✍️', label: 'write' },
    ],
  },
  {
    word: 'by',
    correctIndex: 2,
    options: [
      { emoji: '🔛', label: 'on' },
      { emoji: '⬇️', label: 'under' },
      { emoji: '↔️', label: 'by' },
      { emoji: '🔝', label: 'over' },
    ],
  },
  {
    word: 'why',
    correctIndex: 0,
    options: [
      { emoji: '🤷', label: 'why' },
      { emoji: '🤔', label: 'how' },
      { emoji: '📍', label: 'where' },
      { emoji: '🕐', label: 'when' },
    ],
  },
  {
    word: 'into',
    correctIndex: 3,
    options: [
      { emoji: '📤', label: 'out of' },
      { emoji: '⬆️', label: 'above' },
      { emoji: '↔️', label: 'beside' },
      { emoji: '📥', label: 'into' },
    ],
  },
  {
    word: 'who',
    correctIndex: 1,
    options: [
      { emoji: '🤷', label: 'why' },
      { emoji: '🔍', label: 'who' },
      { emoji: '🕐', label: 'when' },
      { emoji: '🤔', label: 'how' },
    ],
  },

  // === Word Wall Unit 3 ===
  {
    word: 'wash',
    correctIndex: 0,
    options: [
      { emoji: '🧼', label: 'wash' },
      { emoji: '🍽️', label: 'eat' },
      { emoji: '😴', label: 'sleep' },
      { emoji: '👗', label: 'dress' },
    ],
  },
  {
    word: 'some',
    correctIndex: 2,
    options: [
      { emoji: '0️⃣', label: 'none' },
      { emoji: '📦', label: 'all' },
      { emoji: '🤏', label: 'some' },
      { emoji: '1️⃣', label: 'one' },
    ],
  },
  {
    word: 'want',
    correctIndex: 1,
    options: [
      { emoji: '🤲', label: 'have' },
      { emoji: '🙏', label: 'want' },
      { emoji: '🎁', label: 'give' },
      { emoji: '🚫', label: 'none' },
    ],
  },
  {
    word: 'come',
    correctIndex: 0,
    options: [
      { emoji: '🫲', label: 'come' },
      { emoji: '👋', label: 'go' },
      { emoji: '🛑', label: 'stop' },
      { emoji: '🏃', label: 'run' },
    ],
  },
  {
    word: 'what',
    correctIndex: 3,
    options: [
      { emoji: '🔍', label: 'who' },
      { emoji: '🤷', label: 'why' },
      { emoji: '📍', label: 'where' },
      { emoji: '❓', label: 'what' },
    ],
  },
  {
    word: 'done',
    correctIndex: 1,
    options: [
      { emoji: '▶️', label: 'start' },
      { emoji: '✅', label: 'done' },
      { emoji: '⏸️', label: 'wait' },
      { emoji: '🔄', label: 'again' },
    ],
  },
  {
    word: 'none',
    correctIndex: 2,
    options: [
      { emoji: '📦', label: 'all' },
      { emoji: '🤏', label: 'some' },
      { emoji: '0️⃣', label: 'none' },
      { emoji: '1️⃣', label: 'one' },
    ],
  },

  // === Word Wall Unit 4 ===
  {
    word: 'our',
    correctIndex: 0,
    options: [
      { emoji: '👨‍👩‍👦', label: 'our' },
      { emoji: '🙋', label: 'my' },
      { emoji: '👉', label: 'your' },
      { emoji: '👤', label: 'his' },
    ],
  },
  {
    word: 'among',
    correctIndex: 3,
    options: [
      { emoji: '⬆️', label: 'above' },
      { emoji: '⬇️', label: 'below' },
      { emoji: '↔️', label: 'beside' },
      { emoji: '👥', label: 'among' },
    ],
  },
  {
    word: 'out',
    correctIndex: 1,
    options: [
      { emoji: '📥', label: 'in' },
      { emoji: '📤', label: 'out' },
      { emoji: '⬆️', label: 'up' },
      { emoji: '⬇️', label: 'down' },
    ],
  },
  {
    word: 'almost',
    correctIndex: 0,
    options: [
      { emoji: '🤌', label: 'almost' },
      { emoji: '✅', label: 'done' },
      { emoji: '❌', label: 'never' },
      { emoji: '♾️', label: 'always' },
    ],
  },
  {
    word: 'about',
    correctIndex: 2,
    options: [
      { emoji: '⬆️', label: 'above' },
      { emoji: '🔄', label: 'around' },
      { emoji: '💬', label: 'about' },
      { emoji: '⬇️', label: 'below' },
    ],
  },

  // === Word Wall Unit 5 ===
  {
    word: 'have',
    correctIndex: 1,
    options: [
      { emoji: '🙏', label: 'want' },
      { emoji: '🤲', label: 'have' },
      { emoji: '🎁', label: 'give' },
      { emoji: '🗑️', label: 'toss' },
    ],
  },
  {
    word: 'would',
    correctIndex: 0,
    options: [
      { emoji: '💭', label: 'would' },
      { emoji: '💪', label: 'could' },
      { emoji: '☝️', label: 'should' },
      { emoji: '🚫', label: 'will not' },
    ],
  },
  {
    word: 'give',
    correctIndex: 3,
    options: [
      { emoji: '🤲', label: 'have' },
      { emoji: '🙏', label: 'want' },
      { emoji: '🫳', label: 'take' },
      { emoji: '🎁', label: 'give' },
    ],
  },
  {
    word: 'should',
    correctIndex: 2,
    options: [
      { emoji: '💭', label: 'would' },
      { emoji: '💪', label: 'could' },
      { emoji: '☝️', label: 'should' },
      { emoji: '🚫', label: 'will not' },
    ],
  },
  {
    word: 'live',
    correctIndex: 1,
    options: [
      { emoji: '💀', label: 'dead' },
      { emoji: '🏡', label: 'live' },
      { emoji: '🎁', label: 'give' },
      { emoji: '🚗', label: 'drive' },
    ],
  },
  {
    word: 'there',
    correctIndex: 0,
    options: [
      { emoji: '👉', label: 'there' },
      { emoji: '📍', label: 'here' },
      { emoji: '📍', label: 'where' },
      { emoji: '🗺️', label: 'far' },
    ],
  },
  {
    word: 'could',
    correctIndex: 3,
    options: [
      { emoji: '💭', label: 'would' },
      { emoji: '☝️', label: 'should' },
      { emoji: '🚫', label: 'will not' },
      { emoji: '💪', label: 'could' },
    ],
  },
  {
    word: 'where',
    correctIndex: 2,
    options: [
      { emoji: '🕐', label: 'when' },
      { emoji: '🔍', label: 'who' },
      { emoji: '🗺️', label: 'where' },
      { emoji: '🤷', label: 'why' },
    ],
  },

  // === Word Wall Unit 6 ===
  {
    word: 'one',
    correctIndex: 0,
    options: [
      { emoji: '1️⃣', label: 'one' },
      { emoji: '2️⃣', label: 'two' },
      { emoji: '3️⃣', label: 'three' },
      { emoji: '4️⃣', label: 'four' },
    ],
  },
  {
    word: 'love',
    correctIndex: 1,
    options: [
      { emoji: '😠', label: 'hate' },
      { emoji: '❤️', label: 'love' },
      { emoji: '😊', label: 'like' },
      { emoji: '😢', label: 'sad' },
    ],
  },
  {
    word: 'once',
    correctIndex: 2,
    options: [
      { emoji: '♾️', label: 'always' },
      { emoji: '❌', label: 'never' },
      { emoji: '1️⃣', label: 'once' },
      { emoji: '🔄', label: 'again' },
    ],
  },
  {
    word: 'above',
    correctIndex: 3,
    options: [
      { emoji: '⬇️', label: 'below' },
      { emoji: '↔️', label: 'beside' },
      { emoji: '⤵️', label: 'under' },
      { emoji: '⬆️', label: 'above' },
    ],
  },

  // === Word Wall Unit 7 ===
  {
    word: 'women',
    correctIndex: 0,
    options: [
      { emoji: '👩‍👩‍👧', label: 'women' },
      { emoji: '👩', label: 'woman' },
      { emoji: '👨‍👨‍👦', label: 'men' },
      { emoji: '👨', label: 'man' },
    ],
  },
  {
    word: 'they',
    correctIndex: 1,
    options: [
      { emoji: '👤', label: 'he' },
      { emoji: '👥', label: 'they' },
      { emoji: '👩', label: 'she' },
      { emoji: '🙋', label: 'me' },
    ],
  },
  {
    word: 'woman',
    correctIndex: 2,
    options: [
      { emoji: '👨', label: 'man' },
      { emoji: '👦', label: 'boy' },
      { emoji: '👩', label: 'woman' },
      { emoji: '👧', label: 'girl' },
    ],
  },
  {
    word: 'does',
    correctIndex: 0,
    options: [
      { emoji: '✅', label: 'does' },
      { emoji: '❌', label: 'does not' },
      { emoji: '🦌', label: 'deer' },
      { emoji: '🤷', label: 'maybe' },
    ],
  },

  // === Word Wall Unit 8 ===
  {
    word: 'friend',
    correctIndex: 1,
    options: [
      { emoji: '👨‍👩‍👦', label: 'family' },
      { emoji: '🤝', label: 'friend' },
      { emoji: '👤', label: 'stranger' },
      { emoji: '👶', label: 'baby' },
    ],
  },
  {
    word: 'great',
    correctIndex: 0,
    options: [
      { emoji: '👍', label: 'great' },
      { emoji: '👎', label: 'bad' },
      { emoji: '😐', label: 'okay' },
      { emoji: '🤏', label: 'small' },
    ],
  },
  {
    word: 'been',
    correctIndex: 3,
    options: [
      { emoji: '▶️', label: 'is' },
      { emoji: '⏩', label: 'will be' },
      { emoji: '❌', label: 'never' },
      { emoji: '⏪', label: 'been' },
    ],
  },
  {
    word: 'break',
    correctIndex: 2,
    options: [
      { emoji: '🔨', label: 'build' },
      { emoji: '🩹', label: 'fix' },
      { emoji: '💥', label: 'break' },
      { emoji: '🤲', label: 'hold' },
    ],
  },

  // === Word Wall Unit 9 ===
  {
    word: 'again',
    correctIndex: 0,
    options: [
      { emoji: '🔄', label: 'again' },
      { emoji: '🛑', label: 'stop' },
      { emoji: '1️⃣', label: 'once' },
      { emoji: '❌', label: 'never' },
    ],
  },
  {
    word: 'always',
    correctIndex: 1,
    options: [
      { emoji: '❌', label: 'never' },
      { emoji: '♾️', label: 'always' },
      { emoji: '🤏', label: 'sometimes' },
      { emoji: '1️⃣', label: 'once' },
    ],
  },
  {
    word: 'against',
    correctIndex: 2,
    options: [
      { emoji: '🤝', label: 'with' },
      { emoji: '🎁', label: 'for' },
      { emoji: '🆚', label: 'against' },
      { emoji: '↔️', label: 'beside' },
    ],
  },
  {
    word: 'also',
    correctIndex: 3,
    options: [
      { emoji: '🚫', label: 'not' },
      { emoji: '🔀', label: 'or' },
      { emoji: '➡️', label: 'then' },
      { emoji: '➕', label: 'also' },
    ],
  },
  {
    word: 'today',
    correctIndex: 0,
    options: [
      { emoji: '📅', label: 'today' },
      { emoji: '⏪', label: 'yesterday' },
      { emoji: '⏩', label: 'tomorrow' },
      { emoji: '🗓️', label: 'next week' },
    ],
  },
  {
    word: 'know',
    correctIndex: 1,
    options: [
      { emoji: '🤷', label: 'guess' },
      { emoji: '🧠', label: 'know' },
      { emoji: '❓', label: 'wonder' },
      { emoji: '🤔', label: 'think' },
    ],
  },
  {
    word: 'away',
    correctIndex: 2,
    options: [
      { emoji: '📍', label: 'here' },
      { emoji: '🏠', label: 'home' },
      { emoji: '👋', label: 'away' },
      { emoji: '🫲', label: 'come' },
    ],
  },
  {
    word: 'knew',
    correctIndex: 0,
    options: [
      { emoji: '🧠', label: 'knew' },
      { emoji: '🤷', label: 'guessed' },
      { emoji: '🆕', label: 'new' },
      { emoji: '🤔', label: 'thought' },
    ],
  },

  // === Word Wall Unit 10 ===
  {
    word: 'work',
    correctIndex: 1,
    options: [
      { emoji: '⚽', label: 'play' },
      { emoji: '💼', label: 'work' },
      { emoji: '😴', label: 'rest' },
      { emoji: '🍽️', label: 'eat' },
    ],
  },
  {
    word: 'fourth',
    correctIndex: 2,
    options: [
      { emoji: '🥇', label: 'first' },
      { emoji: '🥈', label: 'second' },
      { emoji: '4️⃣', label: 'fourth' },
      { emoji: '🥉', label: 'third' },
    ],
  },
  {
    word: 'word',
    correctIndex: 3,
    options: [
      { emoji: '🔢', label: 'number' },
      { emoji: '🖼️', label: 'picture' },
      { emoji: '🎵', label: 'song' },
      { emoji: '📝', label: 'word' },
    ],
  },
  {
    word: 'pear',
    correctIndex: 0,
    options: [
      { emoji: '🍐', label: 'pear' },
      { emoji: '🍎', label: 'apple' },
      { emoji: '🍌', label: 'banana' },
      { emoji: '🍊', label: 'orange' },
    ],
  },
  {
    word: 'world',
    correctIndex: 1,
    options: [
      { emoji: '🏠', label: 'house' },
      { emoji: '🌍', label: 'world' },
      { emoji: '🏙️', label: 'city' },
      { emoji: '🏫', label: 'school' },
    ],
  },
  {
    word: 'wear',
    correctIndex: 2,
    options: [
      { emoji: '🍽️', label: 'eat' },
      { emoji: '📖', label: 'read' },
      { emoji: '👕', label: 'wear' },
      { emoji: '🧼', label: 'wash' },
    ],
  },
  {
    word: 'your',
    correctIndex: 0,
    options: [
      { emoji: '👉', label: 'your' },
      { emoji: '🙋', label: 'my' },
      { emoji: '👤', label: 'his' },
      { emoji: '👥', label: 'our' },
    ],
  },
  {
    word: 'tear',
    correctIndex: 3,
    options: [
      { emoji: '🩹', label: 'fix' },
      { emoji: '✂️', label: 'cut' },
      { emoji: '🔨', label: 'break' },
      { emoji: '😢', label: 'tear' },
    ],
  },
  {
    word: 'four',
    correctIndex: 1,
    options: [
      { emoji: '1️⃣', label: 'one' },
      { emoji: '4️⃣', label: 'four' },
      { emoji: '3️⃣', label: 'three' },
      { emoji: '5️⃣', label: 'five' },
    ],
  },
  {
    word: 'bear',
    correctIndex: 0,
    options: [
      { emoji: '🐻', label: 'bear' },
      { emoji: '🦁', label: 'lion' },
      { emoji: '🐺', label: 'wolf' },
      { emoji: '🦊', label: 'fox' },
    ],
  },

  // === Word Wall Unit 11 ===
  {
    word: 'door',
    correctIndex: 2,
    options: [
      { emoji: '🪟', label: 'window' },
      { emoji: '🧱', label: 'wall' },
      { emoji: '🚪', label: 'door' },
      { emoji: '🏠', label: 'house' },
    ],
  },
  {
    word: 'buy',
    correctIndex: 1,
    options: [
      { emoji: '💰', label: 'sell' },
      { emoji: '🛒', label: 'buy' },
      { emoji: '🎁', label: 'give' },
      { emoji: '📦', label: 'send' },
    ],
  },
  {
    word: 'poor',
    correctIndex: 0,
    options: [
      { emoji: '😟', label: 'poor' },
      { emoji: '🤑', label: 'rich' },
      { emoji: '😊', label: 'happy' },
      { emoji: '😎', label: 'cool' },
    ],
  },
  {
    word: 'build',
    correctIndex: 3,
    options: [
      { emoji: '💥', label: 'break' },
      { emoji: '🖌️', label: 'paint' },
      { emoji: '🧹', label: 'clean' },
      { emoji: '🏗️', label: 'build' },
    ],
  },
  {
    word: 'floor',
    correctIndex: 2,
    options: [
      { emoji: '🚪', label: 'door' },
      { emoji: '🪟', label: 'window' },
      { emoji: '🟫', label: 'floor' },
      { emoji: '🧱', label: 'wall' },
    ],
  },

  // === Word Wall Unit 12 ===
  {
    word: 'father',
    correctIndex: 0,
    options: [
      { emoji: '👨', label: 'father' },
      { emoji: '👩', label: 'mother' },
      { emoji: '👦', label: 'brother' },
      { emoji: '👧', label: 'sister' },
    ],
  },
  {
    word: 'brought',
    correctIndex: 1,
    options: [
      { emoji: '🫳', label: 'took' },
      { emoji: '🤲', label: 'brought' },
      { emoji: '🛒', label: 'bought' },
      { emoji: '💭', label: 'thought' },
    ],
  },
  {
    word: 'other',
    correctIndex: 2,
    options: [
      { emoji: '☝️', label: 'this' },
      { emoji: '🙋', label: 'same' },
      { emoji: '👉', label: 'other' },
      { emoji: '📦', label: 'all' },
    ],
  },
  {
    word: 'thought',
    correctIndex: 3,
    options: [
      { emoji: '🗣️', label: 'said' },
      { emoji: '🧠', label: 'knew' },
      { emoji: '🤲', label: 'brought' },
      { emoji: '💭', label: 'thought' },
    ],
  },
  {
    word: 'mother',
    correctIndex: 0,
    options: [
      { emoji: '👩', label: 'mother' },
      { emoji: '👨', label: 'father' },
      { emoji: '👧', label: 'sister' },
      { emoji: '👦', label: 'brother' },
    ],
  },
  {
    word: 'young',
    correctIndex: 1,
    options: [
      { emoji: '🧓', label: 'old' },
      { emoji: '👶', label: 'young' },
      { emoji: '💪', label: 'strong' },
      { emoji: '🏃', label: 'fast' },
    ],
  },
  {
    word: 'brother',
    correctIndex: 2,
    options: [
      { emoji: '👧', label: 'sister' },
      { emoji: '👨', label: 'father' },
      { emoji: '👦', label: 'brother' },
      { emoji: '👩', label: 'mother' },
    ],
  },
  {
    word: 'touch',
    correctIndex: 0,
    options: [
      { emoji: '✋', label: 'touch' },
      { emoji: '👀', label: 'look' },
      { emoji: '👂', label: 'hear' },
      { emoji: '👃', label: 'smell' },
    ],
  },
  {
    word: 'fought',
    correctIndex: 3,
    options: [
      { emoji: '🤲', label: 'brought' },
      { emoji: '💭', label: 'thought' },
      { emoji: '🛒', label: 'bought' },
      { emoji: '🥊', label: 'fought' },
    ],
  },
  {
    word: 'cousin',
    correctIndex: 1,
    options: [
      { emoji: '👦', label: 'brother' },
      { emoji: '🧒', label: 'cousin' },
      { emoji: '🤝', label: 'friend' },
      { emoji: '👤', label: 'stranger' },
    ],
  },
  {
    word: 'bought',
    correctIndex: 2,
    options: [
      { emoji: '🤲', label: 'brought' },
      { emoji: '💭', label: 'thought' },
      { emoji: '🛒', label: 'bought' },
      { emoji: '🥊', label: 'fought' },
    ],
  },
]

export default sightWords
