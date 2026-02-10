/**
 * Speak a word aloud using the Web Speech API.
 * Each call fires independently so rapid clicks don't block each other.
 * The previous utterance is NOT cancelled — they can overlap briefly,
 * but in practice the short single-word utterances finish fast enough
 * that it sounds natural.
 */
export function speak(text: string): void {
  if (!('speechSynthesis' in window)) return
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.rate = 0.85 // slightly slower for young readers
  utterance.pitch = 1.1
  window.speechSynthesis.speak(utterance)
}

/** Cancel any queued or in-progress speech. */
export function cancelSpeech(): void {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel()
  }
}

/** Play a "womp womp" sad trombone sound via Web Audio API. */
export function playWompWomp(): void {
  const ctx = new AudioContext()
  const now = ctx.currentTime

  function playTone(start: number, startFreq: number, endFreq: number, duration: number) {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'triangle'
    osc.frequency.setValueAtTime(startFreq, now + start)
    osc.frequency.linearRampToValueAtTime(endFreq, now + start + duration)
    gain.gain.setValueAtTime(0.35, now + start)
    gain.gain.linearRampToValueAtTime(0, now + start + duration)
    osc.connect(gain).connect(ctx.destination)
    osc.start(now + start)
    osc.stop(now + start + duration)
  }

  playTone(0, 311, 233, 0.4)
  playTone(0.45, 277, 207, 0.55)
}

/** Play a bright ascending chime for a correct answer. */
export function playSuccess(): void {
  const ctx = new AudioContext()
  const now = ctx.currentTime

  function playTone(start: number, freq: number, duration: number) {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.value = freq
    gain.gain.setValueAtTime(0.3, now + start)
    gain.gain.linearRampToValueAtTime(0, now + start + duration)
    osc.connect(gain).connect(ctx.destination)
    osc.start(now + start)
    osc.stop(now + start + duration)
  }

  playTone(0, 523, 0.15)
  playTone(0.15, 659, 0.15)
  playTone(0.3, 784, 0.3)
}
