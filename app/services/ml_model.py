from transformers import AutoImageProcessor,AutoModelForImageClassification
from PIL import Image
import torch
import io

MODEL_PATH="app/services/new_model"

processor=AutoImageProcessor.from_pretrained(MODEL_PATH)
model=AutoModelForImageClassification.from_pretrained(MODEL_PATH)

#marathi mapping
label_map_marathi = {
    "Corn___Common_Rust": "कॉर्न कॉमन रस्ट",
    "Corn___Gray_Leaf_Spot": "कॉर्न ग्रे लीफ स्पॉट",
    "Corn___Healthy": "कॉर्न निरोगी",

    "Wheat___Brown_Rust": "गहू ब्राउन रस्ट",
    "Wheat___Healthy": "गहू निरोगी",
    "Wheat___Yellow_Rust": "गहू यलो रस्ट",

    "Potato___Early_Blight": "बटाटा अर्ली ब्लाइट",
    "Potato___Healthy": "बटाटा निरोगी",
    "Potato___Late_Blight": "बटाटा लेट ब्लाइट",

    "Rice___Brown_Spot": "तांदूळ ब्राउन स्पॉट",
    "Rice___Healthy": "तांदूळ निरोगी",
    "Rice___Leaf_Blast": "तांदूळ लीफ ब्लास्ट",

    "Invalid": "ओळख पटली नाही"
}

tips_map = {
    "Corn___Common_Rust": "योग्य फंगीसाइड फवारणी करा आणि प्रतिकारक्षम वाण वापरा",
    "Corn___Gray_Leaf_Spot": "पाने कोरडी ठेवा आणि बुरशीनाशक वापरा",
    "Corn___Healthy": "पीक निरोगी आहे, नियमित निरीक्षण ठेवा",

    "Wheat___Brown_Rust": "रोगप्रतिकारक वाण वापरा आणि फंगीसाइड फवारणी करा",
    "Wheat___Healthy": "पीक निरोगी आहे, काळजी सुरू ठेवा",
    "Wheat___Yellow_Rust": "लवकर फंगीसाइड फवारणी करा आणि संक्रमित भाग काढा",

    "Potato___Early_Blight": "नियमित फवारणी करा आणि संक्रमित पाने काढून टाका",
    "Potato___Healthy": "पीक निरोगी आहे, योग्य सिंचन ठेवा",
    "Potato___Late_Blight": "तत्काळ बुरशीनाशक वापरा आणि ओलावा कमी ठेवा",

    "Rice___Brown_Spot": "पोटॅशियम खत वापरा आणि योग्य पाणी व्यवस्थापन करा",
    "Rice___Healthy": "पीक निरोगी आहे",
    "Rice___Leaf_Blast": "फंगीसाइड वापरा आणि संक्रमित पाने काढा",

    "Invalid": "स्पष्ट फोटो द्या किंवा कृषी तज्ञांचा सल्ला घ्या"
}

def predict_disease(image_bytes):

    image=Image.open(io.BytesIO(image_bytes)).convert("RGB")

    inputs=processor(images=image,return_tensors="pt")

    #prediction logic
    with torch.no_grad():
        outputs=model(**inputs)

        logits=outputs.logits
        predicted_class_id=logits.argmax(-1).item()
        confidence=torch.softmax(logits,dim=1)[0][predicted_class_id].item()

        label=model.config.id2label[predicted_class_id]

        marathi_label=label_map_marathi.get(label,label)
        tips=tips_map.get(label,"कृपया तज्ञांचा सल्ला घ्या")
    

    crop = label.split("___")[0] if "___" in label else "Unknown"

    if confidence<0.4:
       return {
        "disease": "निश्चित ओळख नाही",
        "confidence": round(confidence, 2),
        "advice": "कृपया स्पष्ट फोटो द्या किंवा कृषी तज्ञांचा सल्ला घ्या"
    }

    return{
        "crop":crop,
        "disease":marathi_label,
        "tips":tips,
        "confidence":round(confidence,2)
    }
    

