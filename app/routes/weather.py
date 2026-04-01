from fastapi import APIRouter
from app.services.weather_service import get_weather_with_tips

router=APIRouter()

@router.get("/weather/{city}")
def fetch_weather(city:str):
    return get_weather_with_tips(city)