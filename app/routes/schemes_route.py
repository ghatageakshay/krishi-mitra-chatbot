from fastapi import APIRouter
from app.services.scheme_service import get_schemes

router=APIRouter()

print("schemes route added")
@router.get("/schemes/{crop}")
def fetch_schemes(crop:str):
    return get_schemes(crop)
         
