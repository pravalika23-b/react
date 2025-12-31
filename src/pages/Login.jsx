import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { FaTimes, FaEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");

  const handleOTP = () => {
    if (!phone) {
      alert("Please enter phone number");
      return;
    }
    alert("OTP sent (UI demo only)");
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">
        {/* Header */}
        <div className="login-header">
          <h2>Login</h2>
          <FaTimes className="close-icon" onClick={() => navigate("/")} />
        </div>

        {/* Phone Input */}
        <div className="phone-box">
          <span className="country-code">🇮🇳 +91</span>
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* OTP Button */}
        <button className="primary-btn" onClick={handleOTP}>
          Send One Time Password
        </button>

        <div className="divider">
          <span>or</span>
        </div>

        {/* Email Login */}
        <button className="secondary-btn">
          <FaEnvelope />
          Continue with Email
        </button>

        {/* Google Login */}
        <button className="secondary-btn">
          <FcGoogle />
          Sign in with Google
        </button>

        {/* Footer */}
        <p className="signup-text">
          New to GrafixUI? <Link to="/signup">Create account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
