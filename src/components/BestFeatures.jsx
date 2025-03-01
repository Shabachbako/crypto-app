import React from "react";
import { FaShieldAlt, FaGift, FaGlobe, FaLock, FaDollarSign, FaChartBar } from "react-icons/fa"; // Importing icons
import "./BestFeatures.css"; // Import the CSS file

const BestFeatures = () => {
  return (
    <section className="best-features">
      <div className="container">
        <h4 className="section-subtitle">CRYPTCON FEATURES</h4>
        <h2 className="section-title">Why Choose CryptCon?</h2>
        <p className="section-description">
          CryptCon is designed to provide a seamless, secure, and rewarding cryptocurrency experience. Whether you're a beginner or a seasoned investor, our platform ensures fast transactions, low fees, and complete security.
        </p>

        <div className="features-grid">
          <div className="feature-item">
            <FaShieldAlt className="feature-icon" />
            <h3>Safe & Secure</h3>
            <p>
              With advanced encryption and multi-layer security protocols, your assets and transactions remain protected against cyber threats at all times.
            </p>
          </div>

          <div className="feature-item">
            <FaGift className="feature-icon" />
            <h3>Exclusive Bonuses</h3>
            <p>
              Enjoy exciting rewards, referral bonuses, and early-bird offers when you join CryptCon. The earlier you invest, the bigger the benefits!
            </p>
          </div>

          <div className="feature-item">
            <FaGlobe className="feature-icon" />
            <h3>Global Access</h3>
            <p>
              Our platform is accessible from anywhere in the world, enabling seamless cross-border transactions with no restrictions.
            </p>
          </div>

          <div className="feature-item">
            <FaLock className="feature-icon" />
            <h3>Secure Wallet Storage</h3>
            <p>
              Store your digital assets safely in our highly secure, non-custodial wallets, ensuring complete control over your private keys.
            </p>
          </div>

          <div className="feature-item">
            <FaDollarSign className="feature-icon" />
            <h3>Low Transaction Fees</h3>
            <p>
              Enjoy minimal transaction fees compared to traditional banking systems, making every trade and transfer more cost-effective.
            </p>
          </div>

          <div className="feature-item">
            <FaChartBar className="feature-icon" />
            <h3>Profitable Investment</h3>
            <p>
              Take advantage of market trends and earn competitive returns with our advanced trading tools and market insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestFeatures;
