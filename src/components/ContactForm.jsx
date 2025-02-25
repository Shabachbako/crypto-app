import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Import icons
import "./ContactForm.css"; // Import styles

const ContactForm = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolore eu fugiat nulla pariatur.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <span>+91 123 456 789</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>info@example.com</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>121 King St, Melbourne VIC 3000, Australia</span>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <h2>Leave a message here</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Name*" required />
              <input type="email" placeholder="Email*" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject*" required />
              <input type="tel" placeholder="Phone*" required />
            </div>
            <textarea placeholder="Message*" required></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.136357823314!2d144.9543318153185!3d-37.817209979751595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d47f35202d5%3A0x5045675218ce7e33!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1646332608321!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactForm;
