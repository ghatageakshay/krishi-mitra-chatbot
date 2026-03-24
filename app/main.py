from fastapi import FastAPI
from app.routes import speech
from app.routes import disease
app=FastAPI()

app.include_router(speech.router)
app.include_router(disease.router)