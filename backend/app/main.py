from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Job(BaseModel):
    title: str
    company: str
    url: str
    status: str

@app.get("/")
def root():
    return {"message": "Backend funcionando"}    

@app.post("/jobs")
def create_job(job: Job):
    print(job)

    return {
        "sucess": True,
        "job": job
    }
