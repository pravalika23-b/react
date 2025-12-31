import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "./Signup.css";
import { FaGoogle } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Signed up successfully!");
    navigate("/login");
  };

  return (
    <div className="signup-overlay">
      <div className="signup-modal">
        <div className="signup-header">
          <h2>Signup</h2>
          <FaTimes className="close" onClick={() => navigate("/")} />
        </div>

        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />

          <label className="terms">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              required
            />
            <span>
              I agree to GrafixUI's{" "}
              <span className="link">Terms of Service</span>,{" "}
              <span className="link">Privacy Policy</span> and{" "}
              <span className="link">Content Policies</span>
            </span>
          </label>

          <button
            className={`primary-btn ${!checked ? "disabled" : ""}`}
            disabled={!checked}
          >
            Create account
          </button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <button className="google-btn">
          <FaGoogle className="google-icon" />
          Sign in with Google
        </button>

        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
