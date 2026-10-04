from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field
from typing import List, Optional
from app.services.gemini_service import gemini_service

router = APIRouter(prefix="/api/chat", tags=["Chat"])

class ChatMessage(BaseModel):
    role: str = Field(..., description="Role: 'user' or 'assistant'")
    content: str = Field(..., description="Message text content")

class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, description="The user's query or speech transcript")
    history: Optional[List[ChatMessage]] = Field(default=[], description="Previous conversation turns")

class ChatResponse(BaseModel):
    response: str
    status: str = "success"

@router.post("", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    """
    Accepts user message and optional conversation history, returns Gemini AI response.
    """
    try:
        history_dicts = [{"role": m.role, "content": m.content} for m in request.history]
        bot_response = await gemini_service.generate_response(
            prompt=request.message,
            conversation_history=history_dicts
        )
        return ChatResponse(response=bot_response, status="success")
    except ValueError as ve:
        raise HTTPException(status_code=400, detail=str(ve))
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f"AI Service Error: {str(ex)}")
