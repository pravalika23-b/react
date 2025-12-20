import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch, FaUser } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">GrafixUI</Link>
      </div>

      {/* Search Bar */}
      <div className="search-box">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search food..." />
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link>
        </li>
        <li>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
        </li>
        <div className="auth-buttons">
  <Link to="/login" className="login-btn">
    Login
  </Link>

  <Link to="/signup" className="signup-btn">
    Sign Up
  </Link>
</div>
      </ul>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
