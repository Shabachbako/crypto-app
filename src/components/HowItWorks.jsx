import React from "react";
import "./HowItWorks.css";
import cryptoGraphic from "../assets/work-processs.png"; // Update with the correct image path

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <h4 className="section-subtitle">WHAT IS CRYPTCON</h4>
        <h2 className="section-title">How it Works</h2>
        <p className="section-description1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        </p>

        <div className="content-wrapper">
          {/* Left: Image Section */}
          <div className="graphic">
            <img src={cryptoGraphic} alt="Crypto Process Graphic" />
          </div>

          {/* Right: Text Content */}
          <div className="text-content">
            <h3>We’ve built a platform to buy and sell shares.</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, 
              when an unknown printer.
            </p>
            
            {/* List with Check Icons */}
            <ul className="features-list">
              <li>✔ Lorem Ipsum is simply dummy text of the printing and typesetting</li>
              <li>✔ Lorem Ipsum is simply dummy text of the printing and typesetting</li>
              <li>✔ Lorem Ipsum is simply dummy text of the printing and typesetting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
