import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import BestFeatures from "./components/BestFeatures";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import AboutPages from "./components/AboutPagess"; // About Pages Component
import FeaturePages from "./components/FeaturePages"; // About Pages Component
import FAQPages from "./components/FAQPages"; // About Pages Component
import ContactPages from "./components/ContactPages"; // About Pages Component

function HomePage() {
  return (
    <>
      <Home />
      <HowItWorks />
      <BestFeatures />
      <Team />
      <FAQ />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is always visible */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Render all sections on HomePage */}
        <Route path="/about" element={<AboutPages />} /> {/* Separate About Page */}
        <Route path="/features" element={<FeaturePages />} /> {/* Separate About Page */}
        <Route path="/faq" element={<FAQPages />} /> {/* Separate About Page */}
        <Route path="/contact" element={<ContactPages />} /> {/* Separate About Page */}
      </Routes>
      <Footer /> {/* Footer is always visible */}
    </Router>
  );
}

export default App;
