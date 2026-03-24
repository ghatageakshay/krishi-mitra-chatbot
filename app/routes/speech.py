from fastapi import APIRouter,UploadFile,File,Form
from app.services.orchestrator import process_query

router=APIRouter()

# class QueryRequest(BaseModel):
#     text:str

#testing basic marathi response route
@router.post("/ask")
async def ask_question(
    text:str=Form(),
    file:UploadFile=File(None)
):
    image=None
    if file:
        image=await file.read()

    result=process_query(text,image)

    return{
        "input":text,
        "result":result
    }

   