# Usa la imagen base de Python
FROM python:3.8-slim

# Setea el directorio de trabajo en el contenedor
WORKDIR /app

COPY ./requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt

# Instala Alembic
RUN pip install alembic

# Copia los archivos de tu proyecto al contenedor
COPY . /app

# Expón el puerto que usará FastAPI
EXPOSE 8000

# Comando para correr el servidor
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
