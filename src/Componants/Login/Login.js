import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

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

  // Handle password visibility toggle
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle form submission
  const handleLogin = (event) => {
    event.preventDefault(); // Prevent page reload

    const { email, password } = formData;

    if (password === "") {
      alert("Password is required.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d|.*\W).*$/;
    if (!passwordPattern.test(password)) {
      alert("Password must contain at least one letter and one number or special character.");
      return;
    }

    // Assuming the login is successful
    alert("Login successful!");
    navigate("/home");  // Redirect to home or any other page
  };

  return (
    <>
      {/* Welcome Section */}
      <div className="welcome-section">
        <h1 className="welcome-text">
          {"WELCOME!".split("").map((char, i) => (
            <span key={i}>{char}</span>
          ))}
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
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"} // Toggle password visibility
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button type="button" onClick={togglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="links">
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
          {"THANK YOU FOR LOGIN!".split("").map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </h1>
      </div>
    </>
  );
};

export default Login;
