from app.services.ml_model import predict_disease
from app.services.weather_service import get_weather
from app.services.ai_service import get_ai_response

print("🔥 ORCHESTRATOR FILE LOADED 🔥")

qa_map = {
    "पाणी": "पिकानुसार पाण्याचे प्रमाण ठरते. जास्त पाणी देणे टाळा.",
    "खत": "माती चाचणी करून योग्य खत वापरा.",
    "कीड": "कीटकनाशक योग्य प्रमाणात वापरा.",
    "तापमान": "हवामानानुसार शेतीचे नियोजन करा.",
    "रोग": "रोग ओळखण्यासाठी फोटो अपलोड करा."
}

def process_query(text=None, image=None):
    # 🥇 1. IMAGE FIRST
    if image:
        return {
            "type": "disease",
            "data": predict_disease(image)
        }

    # 🥇 2. AI FIRST
    if text:
        print("🔥 TEXT RECEIVED:", text)
        ai_response = None 

        try:
            print("🚀 CALLING AI...")
            ai_response = get_ai_response(text)
            print("✅ AI RESPONSE:", ai_response)
        
            # Return only if we got a valid response
            if ai_response and len(ai_response.strip()) > 10:
                return {
                    "type": "ai",
                    "response": ai_response
                }
            
        except Exception as e:
            print("❌ AI ERROR:", e)
            # We set this to None so the code continues to the fallback section
            ai_response = None

    # 🥉 3. FALLBACK (Only runs if AI block didn't return)
    if text:
        search_text = text.lower()
        for key in qa_map:
            if key in search_text: 
                return {
                    "type": "qa",
                    "response": qa_map[key]
                }

    # 🏅 4. DEFAULT
    return {
        "type": "unknown",
        "response": "कृपया स्पष्ट प्रश्न विचारा"
    }