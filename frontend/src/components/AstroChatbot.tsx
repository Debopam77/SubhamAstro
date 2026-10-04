import React, { useState, useRef, useEffect } from 'react'
import {
  MessageCircle,
  X,
  Send,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Sparkles,
  RotateCcw,
  Bot,
  User,
  Copy,
  Check,
  ChevronDown,
  Radio,
} from 'lucide-react'
import { sendChatMessage, ChatMessage } from '../services/chatApi'
import { useVoiceRecorder } from '../hooks/useVoiceRecorder'
import { useTextToSpeech } from '../hooks/useTextToSpeech'

interface MessageItem extends ChatMessage {
  id: string
  timestamp: string
}

const STARTER_PROMPTS = [
  '🌟 What is Karma Correction and how does it work?',
  '🪐 How do planetary transits influence my career?',
  '🔮 What birth details are needed for a Kundli reading?',
  '📅 How can I book a personal consultation with Dr. Subham?',
]

export const AstroChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [inputText, setInputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [autoSpeakReplies, setAutoSpeakReplies] = useState(true)

  const [messages, setMessages] = useState<MessageItem[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'Namaste! ✨ I am **AstroMitra**, your Vedic astrology companion for North Star Astro. You can converse with me by **typing** or by clicking the **microphone** to speak. How may the celestial cosmos illuminate your path today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Voice Hooks
  const {
    isRecording,
    isTranscribing,
    recordingSeconds,
    errorMessage: voiceError,
    startRecording,
    stopRecording,
    cancelRecording,
    setErrorMessage: setVoiceError,
  } = useVoiceRecorder()

  const {
    isSpeaking,
    isMuted,
    speak,
    stop: stopSpeaking,
    toggleMute,
  } = useTextToSpeech()

  // Auto-scroll to bottom of conversation
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
  }, [isOpen, messages, isLoading, isTranscribing])

  // Handle sending a message
  const handleSend = async (textToSend?: string) => {
    const query = (textToSend !== undefined ? textToSend : inputText).trim()
    if (!query || isLoading) return

    // Stop ongoing speech when user submits new query
    stopSpeaking()

    const userMessage: MessageItem = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputText('')
    setIsLoading(true)

    try {
      // Build conversation history (omit system welcome)
      const history: ChatMessage[] = messages
        .filter((m) => m.id !== 'welcome')
        .map((m) => ({ role: m.role, content: m.content }))

      const botReplyText = await sendChatMessage(query, history)

      const botMessage: MessageItem = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content: botReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }

      setMessages((prev) => [...prev, botMessage])

      // Auto-read response aloud if voice output is enabled
      if (autoSpeakReplies && !isMuted) {
        speak(botReplyText)
      }
    } catch (err: any) {
      const errorBotMessage: MessageItem = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content: `Cosmic communication issue: ${err.message || 'Unable to connect to the astrology engine.'}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
      setMessages((prev) => [...prev, errorBotMessage])
    } finally {
      setIsLoading(false)
    }
  }

  // Handle Microphone Toggle
  const handleMicClick = async () => {
    stopSpeaking()

    if (isRecording) {
      // Stop recording and transcribe
      const transcript = await stopRecording()
      if (transcript && transcript.trim()) {
        // Automatically send the transcribed speech
        await handleSend(transcript.trim())
      }
    } else {
      // Start recording
      const started = await startRecording()
      if (!started && voiceError) {
        setTimeout(() => setVoiceError(null), 5000)
      }
    }
  }

  // Reset conversation
  const handleReset = () => {
    stopSpeaking()
    if (isRecording) cancelRecording()
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'assistant',
        content:
          'Namaste! Conversation refreshed. ✨ How may the celestial alignments assist you now?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ])
  }

  // Copy message text
  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="astro-chatbot-container" style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open AstroMitra AI Chatbot"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 20px',
            borderRadius: '9999px',
            background: 'linear-gradient(135deg, #ffd700 0%, #d97706 100%)',
            color: '#070913',
            border: '2px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 8px 30px rgba(245, 158, 11, 0.45), 0 0 20px rgba(255, 215, 0, 0.6)',
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: '0.95rem',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            transform: 'scale(1)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06) translateY(-2px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <div
            style={{
              position: 'relative',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#070913',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffd700',
            }}
          >
            <Sparkles size={18} />
            <span
              style={{
                position: 'absolute',
                top: '-2px',
                right: '-2px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                border: '2px solid #070913',
              }}
            />
          </div>
          <span style={{ letterSpacing: '0.02em' }}>Talk with AstroMitra</span>
          <Mic size={16} style={{ color: '#070913', opacity: 0.85 }} />
        </button>
      )}

      {/* Expanded Chat Drawer / Window */}
      {isOpen && (
        <div
          style={{
            width: '400px',
            maxWidth: 'calc(100vw - 32px)',
            height: '620px',
            maxHeight: 'calc(100vh - 48px)',
            borderRadius: '24px',
            background: 'linear-gradient(180deg, rgba(14, 18, 38, 0.95) 0%, rgba(6, 8, 18, 0.98) 100%)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 215, 0, 0.25)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(255, 215, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 20px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderBottom: '1px solid rgba(255, 215, 0, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  position: 'relative',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
                  border: '1.5px solid #ffd700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffd700',
                  boxShadow: '0 0 15px rgba(255, 215, 0, 0.3)',
                }}
              >
                <Sparkles size={20} />
                <span
                  style={{
                    position: 'absolute',
                    bottom: '1px',
                    right: '1px',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    border: '2px solid #070913',
                  }}
                />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <h3
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: '#f8fafc',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    AstroMitra
                  </h3>
                  <span
                    style={{
                      fontSize: '0.65rem',
                      background: 'rgba(251, 191, 36, 0.15)',
                      color: '#fbbf24',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontWeight: 600,
                    }}
                  >
                    AI VOICE
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: '0.75rem', color: '#94a3b8' }}>
                  {isSpeaking ? '🔊 Speaking...' : isRecording ? '🎙️ Listening to you...' : 'Vedic Celestial Companion'}
                </p>
              </div>
            </div>

            {/* Header Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {/* TTS Mute Toggle */}
              <button
                onClick={toggleMute}
                title={isMuted ? 'Unmute voice read-aloud' : 'Mute voice read-aloud'}
                style={{
                  background: isMuted ? 'rgba(239, 68, 68, 0.15)' : 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '50%',
                  width: '34px',
                  height: '34px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isMuted ? '#f87171' : '#ffd700',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>

              {/* Reset History */}
              <button
                onClick={handleReset}
                title="Reset conversation"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '50%',
                  width: '34px',
                  height: '34px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <RotateCcw size={15} />
              </button>

              {/* Close Button */}
              <button
                onClick={() => {
                  stopSpeaking()
                  if (isRecording) cancelRecording()
                  setIsOpen(false)
                }}
                title="Minimize chat"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '50%',
                  width: '34px',
                  height: '34px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <ChevronDown size={18} />
              </button>
            </div>
          </div>

          {/* Voice Error Notice */}
          {voiceError && (
            <div
              style={{
                padding: '8px 16px',
                background: 'rgba(239, 68, 68, 0.2)',
                borderBottom: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#fca5a5',
                fontSize: '0.75rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>{voiceError}</span>
              <button
                onClick={() => setVoiceError(null)}
                style={{ background: 'none', border: 'none', color: '#fca5a5', cursor: 'pointer' }}
              >
                <X size={14} />
              </button>
            </div>
          )}

          {/* Message List */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            {messages.map((msg) => {
              const isUser = msg.role === 'user'
              return (
                <div
                  key={msg.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isUser ? 'flex-end' : 'flex-start',
                    maxWidth: '100%',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '8px',
                      alignItems: 'flex-start',
                      flexDirection: isUser ? 'row-reverse' : 'row',
                      maxWidth: '88%',
                    }}
                  >
                    {/* Mini Avatar */}
                    <div
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        flexShrink: 0,
                        marginTop: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: isUser
                          ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                          : 'linear-gradient(135deg, #312e81 0%, #4338ca 100%)',
                        color: isUser ? '#070913' : '#ffd700',
                        border: isUser ? 'none' : '1px solid rgba(255, 215, 0, 0.4)',
                      }}
                    >
                      {isUser ? <User size={14} /> : <Bot size={14} />}
                    </div>

                    {/* Bubble Content */}
                    <div
                      style={{
                        padding: '12px 16px',
                        borderRadius: isUser ? '18px 4px 18px 18px' : '4px 18px 18px 18px',
                        background: isUser
                          ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.22) 0%, rgba(217, 119, 6, 0.32) 100%)'
                          : 'rgba(255, 255, 255, 0.05)',
                        border: isUser
                          ? '1px solid rgba(251, 191, 36, 0.4)'
                          : '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#f8fafc',
                        fontSize: '0.88rem',
                        lineHeight: '1.5',
                        wordBreak: 'break-word',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      {/* Simple formatted text */}
                      <div style={{ whiteSpace: 'pre-wrap' }}>
                        {msg.content.split('\n').map((line, idx) => {
                          // Support bold headers and markdown bullets
                          const formattedLine = line
                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            .replace(/^\* (.*)/g, '• $1')
                          return (
                            <span
                              key={idx}
                              dangerouslySetInnerHTML={{ __html: formattedLine }}
                              style={{ display: 'block', marginBottom: line ? '4px' : '8px' }}
                            />
                          )
                        })}
                      </div>

                      {/* Bubble Footer: Timestamp & Audio controls for assistant */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '12px',
                          marginTop: '6px',
                          fontSize: '0.68rem',
                          color: '#94a3b8',
                        }}
                      >
                        <span>{msg.timestamp}</span>

                        {!isUser && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {/* Replay / Speak Message */}
                            <button
                              onClick={() => speak(msg.content)}
                              title="Listen to this reply (Chrome TTS)"
                              style={{
                                background: 'none',
                                border: 'none',
                                color: '#fbbf24',
                                cursor: 'pointer',
                                padding: '2px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '3px',
                              }}
                            >
                              <Volume2 size={13} />
                              <span>Listen</span>
                            </button>

                            {/* Copy button */}
                            <button
                              onClick={() => handleCopy(msg.id, msg.content)}
                              title="Copy text"
                              style={{
                                background: 'none',
                                border: 'none',
                                color: copiedId === msg.id ? '#10b981' : '#94a3b8',
                                cursor: 'pointer',
                                padding: '2px',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              {copiedId === msg.id ? <Check size={13} /> : <Copy size={13} />}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Loading / Thinking Indicator */}
            {isLoading && (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', padding: '6px 0' }}>
                <div
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: '#1e1b4b',
                    border: '1px solid #ffd700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffd700',
                  }}
                >
                  <Sparkles size={14} />
                </div>
                <div
                  style={{
                    padding: '8px 14px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 215, 0, 0.2)',
                    fontSize: '0.8rem',
                    color: '#fbbf24',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span className="diamond-sparkle">✨</span>
                  <span>Consulting celestial alignments...</span>
                </div>
              </div>
            )}

            {/* Transcribing Indicator */}
            {isTranscribing && (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', padding: '6px 0' }}>
                <div
                  style={{
                    padding: '8px 14px',
                    borderRadius: '16px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    fontSize: '0.8rem',
                    color: '#38bdf8',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Radio size={14} className="pulsing-orb" />
                  <span>Deepgram is transcribing your voice...</span>
                </div>
              </div>
            )}

            {/* Quick Starter Suggestions */}
            {messages.length <= 1 && (
              <div style={{ marginTop: '10px' }}>
                <p
                  style={{
                    fontSize: '0.75rem',
                    color: '#94a3b8',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Explore Astrological Inquiries:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {STARTER_PROMPTS.map((prompt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(prompt)}
                      style={{
                        textAlign: 'left',
                        padding: '8px 12px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 215, 0, 0.12)',
                        color: '#e2e8f0',
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 215, 0, 0.08)'
                        e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.35)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                        e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.12)'
                      }}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Active Voice Recording Bar */}
          {isRecording && (
            <div
              style={{
                padding: '10px 16px',
                background: 'linear-gradient(90deg, rgba(239, 68, 68, 0.15) 0%, rgba(185, 28, 28, 0.25) 100%)',
                borderTop: '1px solid rgba(239, 68, 68, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#ef4444',
                    animation: 'pulseGlow 1s infinite',
                  }}
                />
                <span style={{ fontSize: '0.82rem', color: '#fca5a5', fontWeight: 600 }}>
                  Listening... {String(Math.floor(recordingSeconds / 60)).padStart(2, '0')}:
                  {String(recordingSeconds % 60).padStart(2, '0')}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={cancelRecording}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    color: '#f8fafc',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleMicClick}
                  style={{
                    background: '#ef4444',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '4px 12px',
                    color: '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Done & Send
                </button>
              </div>
            </div>
          )}

          {/* Input Dock */}
          <div
            style={{
              padding: '12px 16px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderTop: '1px solid rgba(255, 215, 0, 0.12)',
            }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(15, 23, 42, 0.65)',
                border: '1px solid rgba(255, 215, 0, 0.25)',
                borderRadius: '9999px',
                padding: '4px 6px 4px 14px',
              }}
            >
              {/* Text Input */}
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={isRecording ? 'Listening to your voice...' : 'Type or click mic to speak...'}
                disabled={isLoading || isRecording || isTranscribing}
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#f8fafc',
                  fontSize: '0.88rem',
                }}
              />

              {/* Microphone Toggle Button */}
              <button
                type="button"
                onClick={handleMicClick}
                disabled={isLoading || isTranscribing}
                title={isRecording ? 'Stop recording & transcribe' : 'Speak with your voice (Deepgram)'}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: 'none',
                  background: isRecording
                    ? '#ef4444'
                    : 'rgba(251, 191, 36, 0.15)',
                  color: isRecording ? '#ffffff' : '#fbbf24',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: isRecording ? '0 0 12px rgba(239, 68, 68, 0.6)' : 'none',
                }}
              >
                {isRecording ? <MicOff size={16} /> : <Mic size={16} />}
              </button>

              {/* Send Button */}
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading || isRecording}
                title="Send query"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: 'none',
                  background: inputText.trim() && !isLoading
                    ? 'linear-gradient(135deg, #ffd700 0%, #f59e0b 100%)'
                    : 'rgba(255, 255, 255, 0.08)',
                  color: inputText.trim() && !isLoading ? '#070913' : '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: inputText.trim() && !isLoading ? 'pointer' : 'default',
                  transition: 'all 0.2s',
                }}
              >
                <Send size={16} />
              </button>
            </form>

            {/* Footer tech badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '8px',
                fontSize: '0.65rem',
                color: '#64748b',
              }}
            >
              <span>Powered by Gemini AI</span>
              <span>•</span>
              <span>Deepgram STT</span>
              <span>•</span>
              <span>Web Speech TTS</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
