import os
from pathlib import Path
from dotenv import dotenv_values

# Search for .env in current folder and parent folders
BASE_DIR = Path(__file__).resolve().parent.parent
ROOT_ENV_PATH = BASE_DIR.parent / ".env"
LOCAL_ENV_PATH = BASE_DIR / ".env"

env_data = {}
if ROOT_ENV_PATH.exists():
    env_data.update(dotenv_values(ROOT_ENV_PATH))
if LOCAL_ENV_PATH.exists():
    env_data.update(dotenv_values(LOCAL_ENV_PATH))
# System env overrides
env_data.update(os.environ)

def get_env_var(keys: list[str], default: str = "") -> str:
    for key in keys:
        val = env_data.get(key)
        if val is not None and str(val).strip():
            return str(val).strip()
    return default

GEMINI_API_KEY = get_env_var(["GEMINI_API_KEY", "gemini-api-key", "gemini_api_key"])
DEEPGRAM_API_KEY = get_env_var(["DEEPGRAM_API_KEY", "deepgram-api-key", "deepgram_api_key"])
PORT = int(get_env_var(["PORT", "BACKEND_PORT"], "8000"))
HOST = get_env_var(["HOST", "BACKEND_HOST"], "0.0.0.0")

CORS_ORIGINS = [
    "http://localhost:5173",
    "http://localhost:3000",
    "http://localhost:8080",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:8000",
    "*"
]
