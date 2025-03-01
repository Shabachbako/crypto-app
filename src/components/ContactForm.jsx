import React, { useState } from "react";
import axios from "axios";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Get backend URL from .env (VITE for React)
  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post(`${backendUrl}/send`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      setStatus(response.data.message);
      setFormData({ name: "", email: "", subject: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error.response?.data || error.message);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Reach out to us, and we'll respond as soon as possible.</p>
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

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Leave a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Name*" required value={formData.name} onChange={handleChange} />
              <input type="email" name="email" placeholder="Email*" required value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject*" required value={formData.subject} onChange={handleChange} />
              <input type="tel" name="phone" placeholder="Phone*" required value={formData.phone} onChange={handleChange} />
            </div>
            <textarea name="message" placeholder="Message*" required value={formData.message} onChange={handleChange}></textarea>
            <button type="submit">SUBMIT</button>
          </form>
          <p className="status-message">{status}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
