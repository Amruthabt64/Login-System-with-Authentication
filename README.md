# Login-System-with-Authentication

A full-stack login system built using Flask (Python backend), MySQL database, and a React frontend.
It supports user registration, login, and authentication with email and password validation.

🚀 Features

✅ User registration with email validation

✅ Secure login with hashed passwords

✅ Password rules: must contain uppercase, lowercase, number, special character

✅ JWT-based authentication

✅ MySQL database integration with SQLAlchemy

✅ REST API backend (Flask)

✅ React frontend with styled login & signup pages


🛠 Tech Stack

Frontend: React, CSS
Backend: Flask (Python)
Database: MySQL with SQLAlchemy ORM
Authentication: Werkzeug (password hashing), JWT

⚙️ Installation & Setup

1. Clone the repo
git clone https://github.com/Amruthabt64/Login-System-with-Authentication.git
cd Login-System-with-Authentication

2. Backend Setup
cd backend
flask run or python app.py

3. Frontend Setup
cd frontend
npm install
npm run dev

📝 API Endpoints

POST /register → Register a new user

POST /login → Login user (returns token)

🔒 Security

Passwords are hashed before storing in DB

JWT-based authentication

Validations:
Email must be valid (user@example.com)
Password must contain:
1 uppercase letter
1 lowercase letter
1 number
1 special character

🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you’d like to change.

📜 License

MIT License © 2025 Amrutha

🎥 Demo
👉 [Live Demo Here](https://your-app-link.netlify.app)
