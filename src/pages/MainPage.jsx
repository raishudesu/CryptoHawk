import React from "react";
import Hero from "../components/Hero";
import CryptoCoins from "../components/CryptoCoins";
import AboutUs from "../components/AboutUs";
import Community from "../components/Community";

const MainPage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <CryptoCoins />
      <AboutUs />
      <Community />
    </div>
  );
};

export default MainPage;
