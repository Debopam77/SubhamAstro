import httpx
from typing import Optional
from app.config import DEEPGRAM_API_KEY

DEEPGRAM_API_URL = "https://api.deepgram.com/v1/listen"

class DeepgramService:
    def __init__(self, api_key: Optional[str] = None):
        self.api_key = api_key or DEEPGRAM_API_KEY

    async def transcribe_audio(self, audio_bytes: bytes, content_type: str = "audio/webm", language: str = "en") -> str:
        """
        Transcribes raw audio bytes using Deepgram's Nova-2 speech-to-text API.
        Supports webm, wav, ogg, mp4, etc.
        """
        if not self.api_key:
            raise ValueError("Deepgram API Key is not configured. Please set DEEPGRAM_API_KEY in .env.")

        # Ensure valid mime
        if not content_type or content_type == "application/octet-stream":
            content_type = "audio/webm"

        headers = {
            "Authorization": f"Token {self.api_key}",
            "Content-Type": content_type,
        }

        params = {
            "model": "nova-2",
            "smart_format": "true",
            "punctuate": "true",
            "language": language,
        }

        async with httpx.AsyncClient(timeout=30.0) as client:
            response = await client.post(
                DEEPGRAM_API_URL,
                params=params,
                headers=headers,
                content=audio_bytes
            )

            if response.status_code != 200:
                error_detail = response.text
                raise RuntimeError(f"Deepgram STT failed [{response.status_code}]: {error_detail}")

            data = response.json()
            channels = data.get("results", {}).get("channels", [])
            if channels and len(channels) > 0:
                alternatives = channels[0].get("alternatives", [])
                if alternatives and len(alternatives) > 0:
                    transcript = alternatives[0].get("transcript", "").strip()
                    return transcript

            return ""

deepgram_service = DeepgramService()
