import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Login/Login.css";

const Login = () => {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleLogin = (event) => {
    event.preventDefault(); // Prevent page reload

    const { email, password } = formData;

    if (email === "user123@gmail.com" && password === "password123") {
      alert("Login successful!");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
      {/* Welcome Section */}
      <div className="welcome-section">
        <h1 className="welcome-text">
          <span>W</span>
          <span>E</span>
          <span>L</span>
          <span>C</span>
          <span>O</span>
          <span>M</span>
          <span>E</span>
          <span>!</span>
        </h1>
        <p>
          Welcome to our Appointment Management System. Please log in to
          schedule or manage your appointments.
        </p>
      </div>

      {/* Login Form */}
      <div className="main-container">
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin} className="login">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Login</button>
          </form>
          <div className="links">
            {/* Use the correct route path here */}
            <Link to="/forgot-password">Forgot Password?</Link>
            <p className="message">
              Don't have an account?{" "}
              <button onClick={() => navigate("/signup")}>Go to Sign Up</button>
            </p>
          </div>
        </div>
      </div>

      {/* Thank You Message */}
      <div className="thank-you-message">
        <h1 className="thank-you-text">
          <span>T</span>
          <span>H</span>
          <span>A</span>
          <span>N</span>
          <span>K</span>
          <span> </span>
          <span>Y</span>
          <span>O</span>
          <span>U</span>
          <span> </span>
          <span>F</span>
          <span>O</span>
          <span>R</span>
          <span> </span>
          <span>L</span>
          <span>O</span>
          <span>G</span>
          <span>G</span>
          <span>I</span>
          <span>N</span>
          <span>!</span>
        </h1>
      </div>
    </>
  );
};

export default Login;
