import React from "react";
import "./HowItWorks.css";
import cryptoGraphic from "../assets/work-processs.png"; // Ensure the correct image path

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <h4 className="section-subtitle">HOW CRYPTCON WORKS</h4>
        <h2 className="section-title">A Simple & Secure Way to Trade Crypto</h2>
        <p className="section-description1">
          Cryptcon provides a seamless and secure platform for buying, selling, 
          and managing cryptocurrency assets. Whether you're a beginner or a 
          seasoned trader, our user-friendly system ensures a hassle-free experience.
        </p>

        <div className="content-wrapper">
          {/* Left: Image Section */}
          <div className="graphic">
            <img src={cryptoGraphic} alt="Crypto Trading Process" />
          </div>

          {/* Right: Text Content */}
          <div className="text-content">
            <h3>Trade Crypto Instantly & Securely</h3>
            <p>
              Our platform is designed to simplify crypto transactions while 
              maintaining the highest level of security. Enjoy instant trade execution, 
              low fees, and access to a wide range of digital assets.
            </p>
            
            {/* List with Check Icons */}
            <ul className="features-list">
              <li>✔ Instant deposits and withdrawals with multiple payment options</li>
              <li>✔ Secure wallet integration to keep your assets safe</li>
              <li>✔ Advanced trading tools for beginners and professionals</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
