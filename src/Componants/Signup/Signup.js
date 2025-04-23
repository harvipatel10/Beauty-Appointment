import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Signup/Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSignup = (e) => {
    e.preventDefault();

    const { fullName, email, password, confirmPassword } = formData;

    // Validate that all fields are filled
    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }

    // Validate that passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    // Simulate a successful signup (you can replace this with an API call)
    alert("Sign up successful!");

    // Redirect to the Dashboard page
    navigate("/BeautySpaHome");
  };

  return (
    <>

    {/* Welcome Section */}
    <div className="welcomeback-section">
    <h1 className="welcomeback-text">
          {"WELCOME BACK!".split("").map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </h1>
     </div>
    

   
    <div className="main-container1">
      <div className="signup-container">
        <h2>Create Your Account</h2>

        <form onSubmit={handleSignup} className="signupform">
          <div className="input-field">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
    {/* Thank You Message */}
    <div className="thank-you-message">
        <h1 className="thank-you-text">
        <h1 className="welcome-text">
          {"THANK YOU FOR SIGNUP!".split("").map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </h1>
        </h1>
      </div>
    </>
  );
};

export default Signup;
