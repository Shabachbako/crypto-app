import React from "react";
import "./Home.css";
import cryptoImage from "../assets/homeimage.png"; // Import image

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="background-circles">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="circle-4"></div>
        <div className="circle-5"></div>
      </div>
      <div className="home-container">
        <div className="home-content">
          <h1>Secure & Smart Crypto Investments</h1>
          <p>
            Take control of your financial future with seamless cryptocurrency 
            trading and investment solutions. Buy, sell, and manage digital assets 
            with confidence on a trusted platform.
          </p>
          <button className="learn-more-btn">Get Started</button>
        </div>
        <div className="home-image">
          <img src={cryptoImage} alt="Crypto Investment Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Home;
