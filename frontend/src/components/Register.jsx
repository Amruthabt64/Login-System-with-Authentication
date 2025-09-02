import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css"

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setMessage("Registered successfully! Please login.");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setMessage("Email must be valid & password ≥8 chars with 1×A–Z, 1×a–z, 1×0–9, 1×@#$%.");
      }
    } catch (err) {
      setMessage("Server not reachable");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          className="register-input"
          type="email"
          placeholder="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <input
          className="register-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Register;
