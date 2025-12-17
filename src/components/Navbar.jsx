import { NavLink } from "react-router-dom";
import {
  FaHamburger,
  FaHome,
  FaList,
  FaShoppingCart,
} from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  // Dummy cart count (later we will make it dynamic)
  const cartCount = 0;

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FaHamburger className="logo-icon" />
        <span className="logo-text">GrafixUI</span>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" end className="nav-link">
            <FaHome /> Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/menu" className="nav-link">
            <FaList /> Menu
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart" className="nav-link">
            <FaShoppingCart /> Cart ({cartCount})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
