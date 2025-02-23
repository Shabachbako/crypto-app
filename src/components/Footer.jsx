import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo & Social Media */}
        <div className="footer-section">
          <h2 className="footer-logo">Cryptcon</h2>
          <div className="footer-socials">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="footer-section footer-links">
          <div>
            <p>What is ICO</p>
            <p>Tokens</p>
            <p>Roadmap</p>
          </div>
          <div>
            <p>ICO Apps</p>
            <p>Whitepaper</p>
            <p>Teams</p>
          </div>
          <div>
            <p>Join Us</p>
            <p>Contact</p>
            <p>FAQ</p>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-section newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email Address" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© Cryptcon all Rights Reserved. Designed By <a href="#">TemplatesCoder.com</a></p>
        <div className="footer-bottom-links">
          <a href="#">Terms & Condition</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
