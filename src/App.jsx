import React from "react";
import Navbar from "./components/Navbar"; // Import Navbar
import Home from "./components/Home"; // Import Home
import HowItWorks from "./components/HowItWorks";
import BestFeatures from "./components/BestFeatures";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar /> {/* Render the Navbar */}
      <Home /> {/* Render the Home section */}
      <HowItWorks />
      <BestFeatures />
      <Team />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
