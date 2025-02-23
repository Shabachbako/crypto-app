import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger & Close icons
import logo from "../assets/loggos.png"; // Ensure correct path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo on the left */}
        <div className="logo">
          <img src={logo} alt="Cryptcon Logo" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Navbar Links & Button (Hidden in mobile, visible when menuOpen is true) */}
        <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#feature" onClick={() => setMenuOpen(false)}>Feature</a></li>
            <li><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
          <button className="sign-in-btn" onClick={() => setMenuOpen(false)}>Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
