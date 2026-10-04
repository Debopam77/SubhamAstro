import httpx
from typing import List, Dict, Optional
from app.config import GEMINI_API_KEY

SYSTEM_INSTRUCTION = """You are "AstroMitra", the expert celestial AI companion for SubhamAstro (also known as North Star Astro).
Your expertise encompasses Vedic Astrology (Jyotish Shastra), Kundli/birth chart analysis, planetary transits (Gochar), Dasha periods, Karma Correction, and spiritual remedies.

Guidelines:
1. Warm, empathetic, uplifting, and knowledgeable tone.
2. Keep responses concise, clear, and engaging (1 to 3 short paragraphs), as responses may be spoken aloud via text-to-speech. Avoid overly dense text blocks or excessive markdown symbols that sound awkward when read aloud.
3. When users ask about life questions (career, marriage, health, finances), provide insightful Vedic astrological perspective and recommend analyzing their birth details (date, time, and place of birth).
4. If appropriate, gently invite them to explore SubhamAstro's personalized consultation services, Karma Correction guidance, or learning modules on the website.
5. If the user greets or tests the voice system, greet them warmly and ask how the stars can guide them today.
"""

GEMINI_MODELS = [
    "gemini-3.5-flash",
    "gemini-flash-latest",
    "gemini-3.6-flash",
    "gemini-3.7-flash",
    "gemini-3.8-flash",
    "gemini-3.5-flash-lite",
]

class GeminiService:
    def __init__(self, api_key: Optional[str] = None):
        self.api_key = api_key or GEMINI_API_KEY

    async def generate_response(self, prompt: str, conversation_history: Optional[List[Dict[str, str]]] = None) -> str:
        """
        Generates an astrological answer from Gemini using multi-turn conversation history.
        Uses direct HTTP API with automatic model fallback for maximum resilience.
        """
        if not self.api_key:
            raise ValueError("Gemini API Key is not configured. Please set GEMINI_API_KEY in .env.")

        # Build contents structure
        contents = []

        if conversation_history:
            for msg in conversation_history:
                role = "user" if msg.get("role") in ["user", "human"] else "model"
                contents.append({
                    "role": role,
                    "parts": [{"text": msg.get("content", "")}]
                })

        # Append current user prompt
        contents.append({
            "role": "user",
            "parts": [{"text": prompt}]
        })

        payload = {
            "system_instruction": {
                "parts": [{"text": SYSTEM_INSTRUCTION}]
            },
            "contents": contents,
            "generationConfig": {
                "temperature": 0.7,
                "maxOutputTokens": 800,
            }
        }

        last_error = ""
        # Try available Gemini models in priority order
        async with httpx.AsyncClient(timeout=45.0) as client:
            for model_name in GEMINI_MODELS:
                url = f"https://generativelanguage.googleapis.com/v1beta/models/{model_name}:generateContent?key={self.api_key}"
                try:
                    response = await client.post(url, json=payload, headers={"Content-Type": "application/json"})
                    if response.status_code == 200:
                        data = response.json()
                        candidates = data.get("candidates", [])
                        if candidates and len(candidates) > 0:
                            content = candidates[0].get("content", {})
                            parts = content.get("parts", [])
                            if parts and len(parts) > 0:
                                return parts[0].get("text", "").strip()
                        return "I have reflected upon the cosmic alignments, but could not formulate a clear response. Please try asking again."
                    else:
                        last_error = f"Model {model_name} returned [{response.status_code}]: {response.text}"
                except Exception as ex:
                    last_error = f"Model {model_name} exception: {str(ex)}"

        raise RuntimeError(f"Gemini API request failed across all models. Details: {last_error}")

gemini_service = GeminiService()
