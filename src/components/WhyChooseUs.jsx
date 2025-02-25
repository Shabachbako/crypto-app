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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer.
          </p>

          {/* Features List */}
          <ul className="why-choose-list">
            <li>
              <FaCheckCircle className="check-icon" /> Lorem Ipsum is simply dummy text of the printing and typesetting
            </li>
            <li>
              <FaCheckCircle className="check-icon" /> Lorem Ipsum is simply dummy text of the printing and typesetting
            </li>
            <li>
              <FaCheckCircle className="check-icon" /> Lorem Ipsum is simply dummy text of the printing and typesetting
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
