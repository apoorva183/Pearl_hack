from sqlalchemy import Column, Integer, String, JSON
from database import Base

# Database Model for Users
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    skills = Column(JSON)
    schedule = Column(JSON)

Base.metadata.create_all(bind=Base.metadata.bind)
