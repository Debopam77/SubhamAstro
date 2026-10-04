# SubhamAstro AI Voice & Text Chatbot

This project includes a **Python FastAPI backend** and a **React + TypeScript frontend** that features a conversational Vedic Astrology chatbot (**AstroMitra**) supporting both **text** and **voice** conversations.

---

## 🌟 Architecture & Technologies

1. **LLM**: Google Gemini API (`gemini-3.5-flash` / `gemini-flash-latest`) with dedicated Vedic Astrology system persona.
2. **STT (Speech-to-Text)**: **Deepgram Nova-2** API for ultra-fast, accurate voice transcription.
3. **TTS (Text-to-Speech)**: Chrome's built-in **`window.speechSynthesis`** (Web Speech API) for instant zero-latency spoken responses with natural cadence and mute controls.
4. **Backend**: Python 3.10+ with **FastAPI** & **Uvicorn** (`/backend`).
5. **Frontend**: React 19 + TypeScript + Vite (`/frontend`).

---

## 🚀 Running the Project

### Option A: Using Docker & Docker Compose (Recommended once Docker is installed)

From the project root directory (`SubhamAstro`):
```bash
docker compose up --build
```
- Frontend: `http://localhost:5173`
- Backend API & Swagger Docs: `http://localhost:8000/docs`

---

### Option B: Running Locally (Directly with Python & Node)

#### 1. Start the Python Backend
Ensure Python 3.10+ is installed:
```bash
cd backend

# Create virtual environment (optional but recommended)
python -m venv venv
# Windows:
.\venv\Scripts\activate
# Linux/macOS:
source venv/bin/activate

# Install requirements
pip install -r requirements.txt

# Run the backend server (starts on http://localhost:8000)
python run.py
```

You can test that your API keys are working by running:
```bash
python test_services.py
```

#### 2. Start the Frontend
In a new terminal window:
```bash
cd frontend

# Install dependencies
npm install

# Start Vite development server
npm run dev
```
Open `http://localhost:5173` in Google Chrome (or any modern browser) to test both text and voice chat!

---

## 🔑 Environment Variables
The application reads keys directly from `.env` in the root folder:
```env
deepgram-api-key=your_deepgram_api_key_here
gemini-api-key=your_gemini_api_key_here
```
*(The backend also accepts `DEEPGRAM_API_KEY` and `GEMINI_API_KEY`)*.

---

## 🎙️ How to Use Voice Chat
1. Click the golden **"Talk with AstroMitra"** button at the bottom-right of the screen.
2. Tap the **Microphone** icon. When prompted by Chrome, click **"Allow"** for microphone access.
3. Speak your astrological question (e.g., *"What is Karma Correction and how does it help?"*).
4. Tap **"Done & Send"** (or click the mic again).
5. **Deepgram** transcribes your voice in real time, **Gemini** generates an astrological reply, and **Chrome TTS** speaks the response back to you aloud!
6. You can toggle audio mute on/off at any time via the speaker icon in the chat header.
