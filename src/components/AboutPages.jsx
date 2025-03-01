import React from "react";
import AboutPage from "./AboutPage"; // Import the first About section
import HowItWorks from "./HowItWorks";
import MissionSection from "./MissionSection";
import CryptoInvestment from "./CryptoInvestment";
import Team from "./Team";

function AboutPages() {
  return (
    <>
      <AboutPage />
      <MissionSection />
      <HowItWorks />
      <CryptoInvestment />
      <Team />
    </>
  );
}

export default AboutPages;
