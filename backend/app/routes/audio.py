from fastapi import APIRouter, UploadFile, File, Form, HTTPException, Query
from pydantic import BaseModel
from typing import Optional
from app.services.deepgram_service import deepgram_service

router = APIRouter(prefix="/api/audio", tags=["Audio STT"])

class TranscribeResponse(BaseModel):
    transcript: str
    confidence: Optional[float] = None
    status: str = "success"

@router.post("/transcribe", response_model=TranscribeResponse)
async def transcribe_audio_endpoint(
    audio_file: UploadFile = File(..., description="Audio recording blob (e.g. webm, wav, mp4)"),
    language: str = Query("en", description="Target language code (e.g. 'en', 'hi')")
):
    """
    Receives an audio file from the browser microphone and transcribes it via Deepgram STT.
    """
    try:
        audio_bytes = await audio_file.read()
        if not audio_bytes or len(audio_bytes) < 100:
            raise HTTPException(status_code=400, detail="Audio file is empty or too short.")

        content_type = audio_file.content_type or "audio/webm"
        transcript = await deepgram_service.transcribe_audio(
            audio_bytes=audio_bytes,
            content_type=content_type,
            language=language
        )

        return TranscribeResponse(
            transcript=transcript,
            status="success"
        )
    except ValueError as ve:
        raise HTTPException(status_code=400, detail=str(ve))
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f"Deepgram STT Error: {str(ex)}")
