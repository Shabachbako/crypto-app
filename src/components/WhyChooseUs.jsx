import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import "./WhyChooseUs.css"; // Import styles
import { FaCheckCircle } from "react-icons/fa"; // Import check icon
import choiceImage from "../assets/whychoices.png"; // Ensure correct path

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        {/* Left Image */}
        <div className="why-choose-image">
          <img src={choiceImage} alt="Why Choose Us" />
        </div>

        {/* Right Text Content */}
        <div className="why-choose-text">
          <h2>Why Choose Us?</h2>
          <p className="why-choose-description">
            We are committed to providing a secure, transparent, and seamless cryptocurrency 
            trading experience. Our cutting-edge platform ensures fast transactions, reliable 
            customer support, and top-tier security protocols.
          </p>

          {/* Features List */}
          <ul className="why-choose-list">
            <li>
              <FaCheckCircle className="check-icon" /> <strong>Secure & Reliable Transactions:</strong> Our platform uses 
              state-of-the-art encryption and blockchain security measures.
            </li>
            <li>
              <FaCheckCircle className="check-icon" /> <strong>Low Fees & High Speed:</strong> Experience lightning-fast 
              transactions with minimal processing fees.
            </li>
            <li>
              <FaCheckCircle className="check-icon" /> <strong>24/7 Customer Support:</strong> Our expert support team 
              is always available to assist you.
            </li>
          </ul>

          {/* Contact Button (Now a NavLink) */}
          <NavLink to="/contact" className="contact-btn">
            CONTACT INFO
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
