import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Forgotpassword/Forgotpassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = (event) => {
    event.preventDefault(); // Prevent page reload

    if (!email || !newPassword) {
      setMessage("Please enter your email and new password.");
      return;
    }

    // Simulate an API call to reset the password
    setTimeout(() => {
      setMessage("Your password has been reset successfully.");
    }, 150);
  };

  return (
    <>
    <div className="forgot-section">
    <h2>Reset Your Password</h2>
    <p>Enter your email address and your new password below.</p> 
    </div>
    <div className="main-container2">


    <div className="forgot-container">

      <form onSubmit={handleResetPassword} className="forgot">
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Enter your new password" 
          value={newPassword} 
          onChange={(e) => setNewPassword(e.target.value)} 
          required 
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p className="message">{message}</p>}
      <button className="back" onClick={() => navigate("/login")}>
        Back to Login
      </button>
    </div>
    
    
    </div>
    </>
  );
};

export default ForgotPassword;
