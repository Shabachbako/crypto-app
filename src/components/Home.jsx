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
          <h1>Invest In Cryptocoin <br /> Way To Trade</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium, totam rem.
          </p>
          <button className="learn-more-btn">Get Started</button>
        </div>
        <div className="home-image">
          <img src={cryptoImage} alt="Crypto Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Home;
