import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">GrafixUI</h2>
      </div>

      <div className="navbar-right">
        <ul className="nav-links">
          <li>Home</li>
          <li>Menu</li>
          <li>Cart</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
