import React from "react";
import "./CryptoInvestment.css";
import cryptoImage from "../assets/iphones.png"; // Ensure correct path

const CryptoInvestment = () => {
  return (
    <section className="crypto-section">
      <div className="crypto-container">
        {/* Left Image Section */}
        <div className="crypto-image">
          <img src={cryptoImage} alt="Crypto Investment" />
        </div>

        {/* Right Text Section */}
        <div className="crypto-text">
          <h2>Why are so many people investing Digital currencies like Bitcoin</h2>
          <p>
            Bitcoin is different than any currency you’ve used before, so it’s very important
            to understand some key points. You can use them to send or receive any amount of 
            money, with anyone, anywhere in the world, at very low cost. Bitcoin payments are 
            impossible to block and safety.
          </p>
          <p>
            Bitcoin is different than any currency you’ve used before, so it’s very important 
            to understand some key points. You can use them to send or receive any amount of 
            money, with anyone, anywhere in the world, at very low cost. Bitcoin payments are 
            impossible to block and safety.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CryptoInvestment;
