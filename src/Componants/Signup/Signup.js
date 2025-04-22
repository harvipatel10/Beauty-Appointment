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
          <span>W</span>
          <span>E</span>
          <span>L</span>
          <span>C</span>
          <span>O</span>
          <span>M</span>
          <span>E</span>
          <span></span>
          <span>B</span>
          <span>A</span>
          <span>C</span>
          <span>K</span>
          <span>!</span>
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
          <span>S</span>
          <span>I</span>
          <span>G</span>
          <span>N</span>
          <span>U</span>
          <span>P</span>
          <span>!</span>
        </h1>
      </div>
    </>
  );
};

export default Signup;
