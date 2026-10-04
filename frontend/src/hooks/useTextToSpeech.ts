import { useState, useEffect, useRef, useCallback } from 'react'

/**
 * Strips markdown and special symbols so the browser's TTS reads smoothly and naturally.
 */
function cleanTextForSpeech(rawText: string): string {
  return rawText
    .replace(/[*_#`~>]/g, '') // Remove formatting characters
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Convert markdown links [text](url) to text
    .replace(/https?:\/\/\S+/g, '') // Strip naked urls
    .replace(/\n+/g, '. ') // Replace newlines with pause
    .replace(/\s+/g, ' ')
    .trim()
}

export function useTextToSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  const isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window

  // Load available speech synthesis voices
  useEffect(() => {
    if (!isSupported) return

    const updateVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices()
      setVoices(availableVoices)

      // Find an optimal voice: prioritize pleasant English or Indian-English voices
      const preferred =
        availableVoices.find((v) => v.name.includes('Google UK English Female')) ||
        availableVoices.find((v) => v.name.includes('Google US English')) ||
        availableVoices.find((v) => v.lang.startsWith('en-IN')) ||
        availableVoices.find((v) => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Online'))) ||
        availableVoices.find((v) => v.lang.startsWith('en')) ||
        availableVoices[0]

      if (preferred) {
        setSelectedVoice((prev) => prev || preferred)
      }
    }

    updateVoices()
    window.speechSynthesis.onvoiceschanged = updateVoices

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = null
      }
    }
  }, [isSupported])

  const stop = useCallback(() => {
    if (!isSupported) return
    window.speechSynthesis.cancel()
    setIsSpeaking(false)
  }, [isSupported])

  const speak = useCallback(
    (text: string, onEnd?: () => void) => {
      if (!isSupported || isMuted) {
        onEnd?.()
        return
      }

      // Cancel any ongoing speech
      window.speechSynthesis.cancel()

      const cleaned = cleanTextForSpeech(text)
      if (!cleaned) {
        onEnd?.()
        return
      }

      const utterance = new SpeechSynthesisUtterance(cleaned)
      utteranceRef.current = utterance

      if (selectedVoice) {
        utterance.voice = selectedVoice
      }

      utterance.rate = 1.02 // Pleasant, natural conversational cadence
      utterance.pitch = 1.0
      utterance.volume = 1.0

      utterance.onstart = () => {
        setIsSpeaking(true)
      }

      utterance.onend = () => {
        setIsSpeaking(false)
        onEnd?.()
      }

      utterance.onerror = (e) => {
        console.warn('SpeechSynthesis error:', e)
        setIsSpeaking(false)
        onEnd?.()
      }

      window.speechSynthesis.speak(utterance)
    },
    [isSupported, isMuted, selectedVoice]
  )

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      if (!prev) {
        // If muting now, cancel any active utterance
        stop()
      }
      return !prev
    })
  }, [stop])

  return {
    isSupported,
    isSpeaking,
    isMuted,
    voices,
    selectedVoice,
    setSelectedVoice,
    speak,
    stop,
    toggleMute,
  }
}
