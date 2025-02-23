import React, { useState } from "react";
import "./FAQ.css";

const faqData = {
  General: [
    { question: "What is ICO Crypto?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
    { question: "How can I participate in the ICO Token sale?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." }
  ],
  "Pre-ICO & ICO": [
    { question: "What is the difference between Pre-ICO and ICO?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
    { question: "How is the ICO price determined?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." }
  ],
  Tokens: [
    { question: "How do I store my tokens safely?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
    { question: "Are tokens transferable?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." }
  ],
  Client: [
    { question: "What are the benefits of using ICO tokens?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
    { question: "How do I create an ICO wallet?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." }
  ],
  Legal: [
    { question: "Is ICO legal in my country?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
    { question: "What are the regulatory concerns for ICOs?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." }
  ]
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("General");
  const [activeQuestion, setActiveQuestion] = useState(null);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h5 className="faq-subtitle">FAQs</h5>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>

        {/* Tab Navigation */}
        <div className="faq-tabs">
          {Object.keys(faqData).map((tab) => (
            <span 
              key={tab} 
              className={`faq-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => { setActiveTab(tab); setActiveQuestion(null); }}
            >
              {tab}
            </span>
          ))}
        </div>

        {/* FAQ Questions */}
        <div className="faq-content">
          {faqData[activeTab].map((item, index) => (
            <div key={index} className="faq-item">
              <div 
                className="faq-question" 
                onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
              >
                {item.question}
              </div>
              {activeQuestion === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
