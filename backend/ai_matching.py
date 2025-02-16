from database import db
from groq import Client  # Correct import
import os
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

# Fetch API Key from environment
groq_api_key = os.getenv("GROQ_API_KEY")

if not groq_api_key:
    raise ValueError("GROQ_API_KEY is not set! Please check your .env file or system environment variables.")

# Initialize Groq Client
groq_client = Client(api_key=groq_api_key)

def find_matches(user):
    all_users = db.collection("users").stream()
    user_list = [u.to_dict() for u in all_users if u.id != user["email"]]

    # Perform search with Groq API
    response = groq_client.search(query=user["skills"], documents=user_list)

    return [res["name"] for res in response]
