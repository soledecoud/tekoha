import logging
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import inspect
from app.core.database import engine, Base
from app.api.api_v1.api import api_router

# Configuración de logs
logging.basicConfig(level=logging.DEBUG)

app = FastAPI()

# Configuración de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite todas las orígenes
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Importa todos los modelos para que se registren en Base.metadata
from app.models import user

# Verifica si la tabla 'users' existe y crea todas las tablas si no existen
inspector = inspect(engine)
if not inspector.has_table("users"):
    Base.metadata.create_all(bind=engine)

print("Incluyendo router /api/v1")
app.include_router(api_router, prefix="/api/v1")

@app.get("/")
def read_root():
    return {"message": "Bienvenidos a FastAPI application!"}

# Manejador de excepciones global
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    logging.error(f"Error: {exc}")
    return {"detail": str(exc)}