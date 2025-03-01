import React, { useState } from "react";
import "./MissionSection.css";
import missionVideo from "../assets/mission.jpg"; // Ensure correct path
import { FaPlay, FaTimes } from "react-icons/fa"; // Import Play and Close icons

const MissionSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="mission-section">
      <div className="mission-container">
        {/* Left Text Content */}
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p className="subtitle">
            Empowering a Decentralized Future with Innovation & Trust
          </p>
          <p className="description">
            Cryptcon is committed to revolutionizing the financial world through blockchain technology. 
            Our mission is to create a secure, transparent, and accessible cryptocurrency ecosystem that 
            empowers individuals and businesses worldwide.
            <br /><br />
            We believe in the power of decentralized finance (DeFi) to remove barriers, reduce transaction 
            costs, and provide financial opportunities to everyone, regardless of their location or 
            background. Join us in shaping the future of digital assets and financial freedom.
          </p>
        </div>

        {/* Right Image with Play Button */}
        <div className="mission-video">
          <img src={missionVideo} alt="Mission Video" className="video-image" />
          <div className="play-icon" onClick={openModal}>
            <FaPlay />
          </div>
        </div>
      </div>

      {/* Modal for YouTube Video */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-modal" onClick={closeModal}>
              <FaTimes />
            </button>
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Update with actual video link
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default MissionSection;
