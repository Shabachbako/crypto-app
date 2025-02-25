import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for navigation
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/loggos.png"; // Ensure correct path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo on the left */}
        <div className="logo">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Cryptcon Logo" />
          </NavLink>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Navbar Links & Button (Hidden in mobile, visible when menuOpen is true) */}
        <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/features" 
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setMenuOpen(false)}
              >
                Feature
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/faq" 
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setMenuOpen(false)}
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <button className="sign-in-btn" onClick={() => setMenuOpen(false)}>Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
