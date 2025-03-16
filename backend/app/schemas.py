from pydantic import BaseModel, EmailStr, Field

class UserCreate(BaseModel):
    email: EmailStr
    first_name: str = Field(..., min_length=1, pattern=r'^[a-zA-Z]+$')
    last_name: str = Field(..., min_length=1, pattern=r'^[a-zA-Z]+$')
    user: str = Field(..., min_length=1, pattern=r'^[a-zA-Z0-9_]+$')
    password: str = Field(..., min_length=8)

class User(BaseModel):
    id: int
    email: EmailStr
    first_name: str
    last_name: str
    user: str

    class Config:
        orm_mode = True