import asyncio
from app.config import GEMINI_API_KEY, DEEPGRAM_API_KEY
from app.services.gemini_service import gemini_service

async def test_all():
    print("=" * 50)
    print("Testing SubhamAstro Backend Service Configurations")
    print("=" * 50)
    print(f"Gemini API Key configured: {'YES' if GEMINI_API_KEY else 'NO'}")
    print(f"Deepgram API Key configured: {'YES' if DEEPGRAM_API_KEY else 'NO'}")

    if not GEMINI_API_KEY:
        print("[!] WARNING: GEMINI_API_KEY is missing in .env.")
    else:
        print("\nTesting Gemini AI response...")
        try:
            reply = await gemini_service.generate_response("Hello AstroMitra, what is Vedic Astrology in one short sentence?")
            print(f"[OK] Gemini Response:\n{reply}\n")
        except Exception as e:
            print(f"[ERROR] Gemini generation failed: {e}\n")

if __name__ == "__main__":
    asyncio.run(test_all())
