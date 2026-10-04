export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface ChatApiResponse {
  response: string
  status: string
}

export interface TranscribeApiResponse {
  transcript: string
  status: string
}

const API_BASE = '/api'

export async function sendChatMessage(
  message: string,
  history: ChatMessage[] = []
): Promise<string> {
  try {
    const res = await fetch(`${API_BASE}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, history }),
    })

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}))
      throw new Error(errorData.detail || `Server error: ${res.status}`)
    }

    const data: ChatApiResponse = await res.json()
    return data.response
  } catch (err: any) {
    console.error('Chat API request failed:', err)
    // Check if network failed (e.g. backend not running yet)
    if (err.message && err.message.includes('Failed to fetch')) {
      return (
        "✨ AstroMitra is awaiting the celestial backend connection.\n\n" +
        "Please ensure the Python backend server is running (`python run.py` in the `backend/` directory on port 8000)."
      )
    }
    throw err
  }
}

export async function transcribeAudioBlob(
  audioBlob: Blob,
  language: string = 'en'
): Promise<string> {
  const formData = new FormData()
  // Browser MediaRecorder typically records webm or ogg
  const extension = audioBlob.type.includes('wav') ? 'wav' : 'webm'
  formData.append('audio_file', audioBlob, `speech_input.${extension}`)

  const res = await fetch(`${API_BASE}/audio/transcribe?language=${encodeURIComponent(language)}`, {
    method: 'POST',
    body: formData,
  })

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}))
    throw new Error(errorData.detail || `Transcription error (${res.status})`)
  }

  const data: TranscribeApiResponse = await res.json()
  return data.transcript
}
