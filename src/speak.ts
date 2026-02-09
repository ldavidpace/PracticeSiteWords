/** Speak a word aloud using the Web Speech API. */
export function speak(text: string): void {
  if (!('speechSynthesis' in window)) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.rate = 0.85 // slightly slower for young readers
  utterance.pitch = 1.1
  window.speechSynthesis.speak(utterance)
}
