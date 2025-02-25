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
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          </p>
          <p className="description">
            Bitcoin is different than any currency you’ve used before, so it’s very important to 
            understand some key points. You can use them to send or receive any amount of money, 
            with anyone, anywhere in the world, at very low cost. Bitcoin payments are impossible 
            to block and safety.
            <br /><br />
            Bitcoin is different than any currency you’ve used before, so it’s very important to 
            understand some key points. You can use them to send or receive any amount of money, 
            with anyone, anywhere in the world, at very low cost. Bitcoin payments are impossible 
            to block and safety.
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
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Change YouTube link here
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
