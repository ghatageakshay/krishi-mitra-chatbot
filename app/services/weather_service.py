import requests
import os
from dotenv import load_dotenv

load_dotenv()
API_KEY=os.getenv("OPENWEATHER_API_KEY")


def get_weather(city="Pune"):
    url=f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"

    response=requests.get(url)
    data=response.json()

    if data.get("main"):
        temp=data["main"]["temp"]
        weather=data["weather"][0]["description"]

        return f"आज तापमान {temp}°C आहे आणि हवामान {weather} आहे"
    return "हवामान माहिती उपलब्ध नाही"