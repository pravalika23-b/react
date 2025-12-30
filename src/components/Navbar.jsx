import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import "./Navbar.css";
import { SearchContext } from "../context/SearchContext";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const { setSearchTerm } = React.useContext(SearchContext);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">GrafixUI</Link>
      </div>

      {/* Search Bar */}
      <div className="search-box">
        <FaSearch className="search-icon" />
        <input
  type="text"
  placeholder="Search food..."
  onChange={(e) => setSearchTerm(e.target.value)}
/>

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
        <li><Link to="/Orders" onClick={() => setMenuOpen(false)}>Orders</Link>
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
