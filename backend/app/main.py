from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import CORS_ORIGINS, GEMINI_API_KEY, DEEPGRAM_API_KEY
from app.routes import chat, audio

app = FastAPI(
    title="SubhamAstro AI Chat & Voice Assistant API",
    description="Conversational Vedic Astrology Assistant powered by Google Gemini and Deepgram STT.",
    version="1.0.0"
)

# Enable CORS for frontend web application
app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(chat.router)
app.include_router(audio.router)

@app.get("/")
def root():
    return {
        "service": "SubhamAstro AI Chatbot API",
        "status": "online",
        "documentation": "/docs"
    }

@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "gemini_configured": bool(GEMINI_API_KEY),
        "deepgram_configured": bool(DEEPGRAM_API_KEY),
        "keys_loaded": {
            "gemini": f"{GEMINI_API_KEY[:4]}...{GEMINI_API_KEY[-4:]}" if len(GEMINI_API_KEY) > 8 else bool(GEMINI_API_KEY),
            "deepgram": f"{DEEPGRAM_API_KEY[:4]}...{DEEPGRAM_API_KEY[-4:]}" if len(DEEPGRAM_API_KEY) > 8 else bool(DEEPGRAM_API_KEY),
        }
    }
