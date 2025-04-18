import requests
import os

APP_ID = os.getenv("INFERMEDICA_APP_ID")
APP_KEY = os.getenv("INFERMEDICA_APP_KEY")
BASE_URL = "https://api.infermedica.com/v3"

def check_symptoms(symptoms):
    headers = {
        "App-Id": APP_ID,
        "App-Key": APP_KEY,
        "Content-Type": "application/json"
    }

    data = {
        "sex": "male",
        "age": 30,
        "evidence": [{"id": s, "choice_id": "present"} for s in symptoms]
    }

    response = requests.post(f"{BASE_URL}/diagnosis", headers=headers, json=data)
    return response.json()