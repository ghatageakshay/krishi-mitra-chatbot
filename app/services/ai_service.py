from google import genai
import os
from dotenv import load_dotenv

load_dotenv()

client=genai.Client(api_key=os.getenv("gemini_api_key"))


def get_ai_response(query):
    try:
        response=client.models.generate_content(
            model="gemini-2.5-flash",
            contents=f"तू एक शेती तज्ञ आहेस. शेतकऱ्याला मराठीत सोप्या आणि 5-6 ओळींमध्ये उत्तर दे: {query}"
        )

        return response.text

    except Exception as e:
        print("Ai error:",e)

        return None
