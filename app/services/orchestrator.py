from app.services.ml_model import predict_disease
from app.services.weather_service import get_weather
def process_query(text:str=None,image=None):

    text=text.strip() if text else ""

    #for disease relaetd queries
    if "रोग" in text or "पिवळे" in text or "डाग" in text:

        if image:
            result=predict_disease(image)
            return{
                "type":"disease",
                "data":result
            }
        
        else:
            return{
                "type" : "disease",
                "message" : "कृपया पिकाचा फोटो अपलोड करा"
            }
        
    #water related

    elif "पाणी" in text:
        return{
            "type" : "general",
            "message": "सकाळी किंवा संध्याकाळी पाणी द्या"
        }
    
    #weather realted queries
    elif "पाऊस" in text or"हवामान" in text:

        weather_info=get_weather("Pune")
        return{
            "type":"weather",
            "message":weather_info
        }
    
    else:
        return{
            "type":"unknown",
            "message":"माफ करा, मला तुमचा प्रश्न समजला नाही"
        }