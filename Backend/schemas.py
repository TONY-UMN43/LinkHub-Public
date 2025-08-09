from pydantic import BaseModel,Field,StringConstraints,EmailStr,HttpUrl
from typing import List, Optional, Annotated
from datetime import date


class UserProfileBase(BaseModel):
    first_name: str
    last_name: str
    bio: Optional [str]
    location_city: Optional [str]
    location_country: Optional [str]
    location_state: Optional [str]


class UserProfileCreate(UserProfileBase):
    pass

class UserProfileRead(BaseModel):
    id: int
    first_name: str
    last_name:str
r
class ConnectionBase(BaseModel):
    user_id: int
    status:str

class WorkExperienceBase(BaseModel):
    company_name:str
    title:str
    description: Optional [str]
    job_type:str
    location_state:Optional [str]
    location_country: Optional [str]
    skills: Optional [List[int]]
    # date_started: Optional [Date]

class WorkExperienceCreate(WorkExperienceBase):
    pass


class Job(BaseModel):
    id: int
    title: str
    description: str
    company_id: int
    class Config:
        from_attributes = True

class PostBase(BaseModel):
    content: str

class PostCreate(PostBase):
    pass

class BaseConnection(BaseModel):
    user_id: int

class CreateConnection(BaseConnection):
    pass
