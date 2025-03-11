from fastapi import APIRouter
from app.api.endpoints import auth

api_router = APIRouter()
print("Incluyendo router /auth")
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])