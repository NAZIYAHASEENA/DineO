import json
from flask import Flask, request, jsonify

app = Flask(__name__)

DB_FILE = 'users.json'

def load_users():
    try:
        with open(DB_FILE, 'r') as file:
            return json.load(file)
    except (FileNotFoundError, json.JSONDecodeError):
        return {}

def save_users(users):
    with open(DB_FILE, 'w') as file:
        json.dump(users, file, indent=4)

@app.route('/signup', methods=['POST'])
def signup():
    users = load_users()
    data = request.json
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    phone = data.get('phone')
    role = data.get('role')

    if not (name and email and password and phone and role):
        return jsonify({"error": "All fields are required"}), 400

    if email in users:
        return jsonify({"error": "Email already exists"}), 400

    users[email] = {
        "name": name,
        "email": email,
        "password": password,
        "phone": phone,
        "role": role
    }

    save_users(users)
    return jsonify({"message": "User signed up successfully!"}), 201

@app.route('/login', methods=['POST'])
def login():
    users = load_users()
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not (email and password):
        return jsonify({"error": "Email and password are required"}), 400

    user = users.get(email)
    if not user or user['password'] != password:
        return jsonify({"error": "Invalid email or password"}), 401

    user_data = {key: value for key, value in user.items() if key != 'password'}
    return jsonify({"message": "Login successful", "user": user_data}), 200

if __name__ == '__main__':
    app.run(debug=True,port=8080,host='0.0.0.0')