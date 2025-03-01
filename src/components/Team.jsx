import React from "react";
import "./Team.css";

// Importing images
import member1 from "../assets/member1.jpg";
import member2 from "../assets/member2.jpg";
import member3 from "../assets/member3.jpg";
import member4 from "../assets/member4.jpg";

// Importing icons
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    { id: 1, name: "Michael Smith", role: "CEO & Blockchain Strategist", image: member1 },
    { id: 2, name: "Alice Johnson", role: "Chief Technology Officer", image: member2 },
    { id: 3, name: "David Lee", role: "Head of Marketing & Partnerships", image: member3 },
    { id: 4, name: "Sophia Brown", role: "Lead Blockchain Developer", image: member4 }
  ];

  return (
    <section className="team-section">
      <div className="team-container">
        <h5 className="team-subtitle">Meet Our Experts</h5>
        <h2 className="team-title">The Visionaries Behind Cryptcon</h2>
        <p className="team-description">
          Our dedicated team of blockchain experts, developers, and strategists is committed to 
          revolutionizing the crypto industry. With years of experience in finance, technology, and 
          decentralized ecosystems, we strive to bring you a secure and innovative platform.
        </p>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <img src={member.image} alt={member.name} className="team-image" />
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className="social-icons">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
