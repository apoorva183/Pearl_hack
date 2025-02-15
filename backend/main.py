# backend/
# │── main.py            # Main API file (FastAPI endpoints)
# │── database.py        # Database setup (SQLite/PostgreSQL)
# │── models.py          # Database models (SQLAlchemy)
# │── schemas.py         # Pydantic schemas for request validation
# │── ai_matching.py     # AI-based user matching logic (if needed)
# │── requirements.txt   # Python dependencies
# │── .env               # Environment variables (DB URL, secrets)
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from models import User
from schemas import UserCreate, MatchResponse

app = FastAPI()

# Dependency to get database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Register a User
@app.post("/register")
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = User(name=user.name, email=user.email, skills=user.skills, schedule=user.schedule)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return {"message": "User registered successfully!"}

# Match Users Based on Skills
@app.get("/match/{email}", response_model=MatchResponse)
def match_users(email: str, db: Session = Depends(get_db)):
    current_user = db.query(User).filter(User.email == email).first()
    if not current_user:
        raise HTTPException(status_code=404, detail="User not found")
    
    all_users = db.query(User).all()
    matched_users = [user.name for user in all_users if user.email != email and set(user.skills) & set(current_user.skills)]
    return {"matched_users": matched_users}
