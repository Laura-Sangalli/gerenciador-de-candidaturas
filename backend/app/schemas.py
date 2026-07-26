from pydantic import BaseModel

class CreateJob(BaseModel):
    title: str
    company: str
    url: str
    situacao: str

class Job(CreateJob):
    id: int
    application_date: str

    class Config:
        from_attributes: True