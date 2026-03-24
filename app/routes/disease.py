from fastapi import APIRouter,UploadFile,File
from app.services.ml_model import predict_disease

router=APIRouter()

@router.post("/predict-disease")
async def detect_disease(file:UploadFile=File()):

    image=await file.read()

    result=predict_disease(image)

    return result