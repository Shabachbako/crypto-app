import React from "react";
import { FaShieldAlt, FaGift, FaGlobe, FaLock, FaDollarSign, FaChartBar } from "react-icons/fa"; // Importing icons
import "./BestFeatures.css"; // Import the CSS file

const BestFeatures = () => {
  return (
    <section className="best-features">
      <div className="container">
        <h4 className="section-subtitle">CRYPTCON FEATURE</h4>
        <h2 className="section-title">Best Features</h2>
        <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        </p>

        <div className="features-grid">
          <div className="feature-item">
            <FaShieldAlt className="feature-icon" />
            <h3>Safe & Secure</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.
            </p>
          </div>

          <div className="feature-item">
            <FaGift className="feature-icon" />
            <h3>Early Bonus</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.
            </p>
          </div>

          <div className="feature-item">
            <FaGlobe className="feature-icon" />
            <h3>Universal Access</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.
            </p>
          </div>

          <div className="feature-item">
            <FaLock className="feature-icon" />
            <h3>Secure Storage</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.
            </p>
          </div>

          <div className="feature-item">
            <FaDollarSign className="feature-icon" />
            <h3>Low Cost</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.
            </p>
          </div>

          <div className="feature-item">
            <FaChartBar className="feature-icon" />
            <h3>Several Profit</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestFeatures;
