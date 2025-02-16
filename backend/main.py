from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from database import db

app = FastAPI()

class QueryRequest(BaseModel):
    query: str

def fetch_users():
    users_ref = db.collection("users").stream()
    users = [user.to_dict() for user in users_ref]
    print("📝 Firestore Users:", users)  # ✅ Debug: Check users from Firestore
    return users

@app.post("/search")
def search_users(request: QueryRequest):
    """Simple keyword-based search"""
    users = fetch_users()
    if not users:
        print("❌ No users found in Firestore!")
        return []

    query_lower = request.query.lower()
    matched_users = [user for user in users if any(query_lower in skill.lower() for skill in user.get("skills", []))]

    print("✅ Matched Users:", matched_users)
    return matched_users
