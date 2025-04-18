from flask import Flask, request, jsonify
from flask_cors import CORS
from chatbot import get_gpt_response
from infermedica_api import check_symptoms
from medlineplus import get_medical_info

app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_input = data.get("message")
    if not user_input:
        return jsonify({"error": "Message is required"}), 400
    response = get_gpt_response(user_input)
    return jsonify({"response": response})

@app.route("/symptoms", methods=["POST"])
def symptoms():
    data = request.json
    symptoms = data.get("symptoms")
    if not symptoms:
        return jsonify({"error": "Symptoms are required"}), 400
    result = check_symptoms(symptoms)
    return jsonify(result)

@app.route("/info", methods=["GET"])
def info():
    topic = request.args.get("topic")
    if not topic:
        return jsonify({"error": "Topic is required"}), 400
    info = get_medical_info(topic)
    return jsonify({"info": info})

if __name__ == "__main__":
    app.run(debug=True)