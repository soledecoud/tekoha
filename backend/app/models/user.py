from sqlalchemy import Column, Integer, String
from backend.app.core.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    user = Column(String, unique=True, index=True)
    hashed_password = Column(String)   