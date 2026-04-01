from fastapi import APIRouter,UploadFile,File,Form
from app.services.orchestrator import process_query

router=APIRouter()

# class QueryRequest(BaseModel):
#     text:str

#testing basic marathi response route
@router.post("/ask")
async def ask_question(
    text:str=Form(None),
    file:UploadFile=File(None)
):
    image_bytes=None
    if file:
        image_bytes=await file.read()

    result=process_query(text=text,image=image_bytes)
    print("text value",text)
    return result
   