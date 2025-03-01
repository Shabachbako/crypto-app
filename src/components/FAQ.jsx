import React, { useState } from "react";
import "./FAQ.css";

const faqData = {
  General: [
    { 
      question: "What is cryptocurrency?", 
      answer: "Cryptocurrency is a digital or virtual currency that uses cryptography for security and operates on decentralized blockchain technology." 
    },
    { 
      question: "How can I buy cryptocurrency?", 
      answer: "You can buy cryptocurrency through exchanges like Binance, Coinbase, or Kraken by creating an account and purchasing with fiat currency or another crypto asset." 
    }
  ],
  "Crypto Trading": [
    { 
      question: "What is the difference between spot trading and futures trading?", 
      answer: "Spot trading involves buying and selling cryptocurrencies for immediate delivery, while futures trading allows users to speculate on the future price without owning the asset." 
    },
    { 
      question: "How is the price of a cryptocurrency determined?", 
      answer: "Crypto prices are determined by supply and demand, market liquidity, investor sentiment, and broader economic factors." 
    }
  ],
  Security: [
    { 
      question: "How do I store my cryptocurrency safely?", 
      answer: "You can store cryptocurrencies in cold wallets (hardware wallets like Ledger, Trezor) or hot wallets (online wallets with encryption). Always enable 2FA and keep private keys secure." 
    },
    { 
      question: "Are cryptocurrency transactions reversible?", 
      answer: "No, once a cryptocurrency transaction is confirmed on the blockchain, it cannot be reversed. Always double-check recipient addresses before sending funds." 
    }
  ],
  Wallets: [
    { 
      question: "What are the benefits of using a crypto wallet?", 
      answer: "Crypto wallets provide secure storage, easy access, and control over your digital assets, ensuring safety from exchange hacks or third-party risks." 
    },
    { 
      question: "How do I create a cryptocurrency wallet?", 
      answer: "You can create a crypto wallet by using trusted providers like MetaMask, Trust Wallet, or hardware wallets. Follow the setup instructions and securely store your recovery phrase." 
    }
  ],
  Regulations: [
    { 
      question: "Is cryptocurrency legal in my country?", 
      answer: "The legality of cryptocurrency varies by country. Some nations regulate and support crypto trading, while others impose restrictions or bans. Always check local regulations." 
    },
    { 
      question: "What are the tax implications of cryptocurrency trading?", 
      answer: "Many countries treat cryptocurrency as taxable assets, requiring traders to report gains or losses. Consult with a financial expert for compliance in your region." 
    }
  ]
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("General");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h5 className="faq-subtitle">FAQs</h5>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-description">
          Find answers to the most common questions about cryptocurrency, wallets, security, and regulations.
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
            <div 
              key={index} 
              className={`faq-item ${activeQuestion === index ? "active" : ""}`}
              onClick={() => toggleQuestion(index)}
            >
              <div className="faq-question">{item.question}</div>
              <div className="faq-answer">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
