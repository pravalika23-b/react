import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import "./Navbar.css";
import { SearchContext } from "../context/SearchContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { setSearchTerm } = useContext(SearchContext);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/" onClick={closeMenu}>GrafixUI</Link>
      </div>

      {/* Search bar (desktop only) */}
      <div className="search-box">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search food..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Menu */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/menu" onClick={closeMenu}>Menu</Link>
        </li>
        <li>
          <Link to="/cart" onClick={closeMenu}>Cart</Link>
        </li>
        <li>
          <Link to="/orders" onClick={closeMenu}>Orders</Link>
        </li>

        <div className="auth-buttons">
          <Link to="/login" className="login-btn" onClick={closeMenu}>
            Login
          </Link>
          <Link to="/signup" className="signup-btn" onClick={closeMenu}>
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
