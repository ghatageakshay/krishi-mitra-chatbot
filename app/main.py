from fastapi import FastAPI
from app.routes import speech
from app.routes import disease
from app.routes import schemes_route
from app.routes import weather
from fastapi.middleware.cors import CORSMiddleware
app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    # Allow requests from any frontend dev server port (Vite may auto-pick a new port).
    # No cookies/auth headers are used here, so disabling credentials is safe.
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(speech.router)
app.include_router(disease.router)
app.include_router(schemes_route.router)
app.include_router(weather.router)
print("main file added")