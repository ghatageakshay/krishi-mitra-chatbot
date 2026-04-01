import requests
import os
from dotenv import load_dotenv

load_dotenv()
API_KEY=os.getenv("OPENWEATHER_API_KEY")


def get_weather(city):
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"

    response = requests.get(url)
    data = response.json()

    if data.get("main"):
        temp = data["main"]["temp"]
        weather = data["weather"][0]["description"]

        return {
            "city": city,
            "temp": temp,
            "weather": weather
        }

    return None

def weather_tips(weather):
    weather=weather.lower()
    if "rain" in weather:
        return "पावसाची शक्यता आहे. पाणी देणे टाळा आणि निचरा व्यवस्थित ठेवा."

    elif "clear" in weather:
        return "हवामान स्वच्छ आहे. सिंचन आणि खत देण्यासाठी योग्य वेळ."

    elif "cloud" in weather:
        return "ढगाळ वातावरण आहे. रोगांची शक्यता वाढू शकते, निरीक्षण करा."

    elif "hot" in weather:
        return "तापमान जास्त आहे. पिकांना पाणी द्या आणि मल्चिंग करा."

    return "सामान्य शेती व्यवस्थापन ठेवा."

def get_weather_with_tips(city):
    weather_data = get_weather(city)

    if not weather_data:
        return {"error": "हवामान माहिती उपलब्ध नाही"}

    tips = weather_tips(weather_data["weather"])

    return {
        "city": weather_data["city"],
        "temp": weather_data["temp"],
        "weather": weather_data["weather"],
        "tips": tips
    }