import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CryptoCoins from "./components/CryptoCoins";
import AboutUs from "./components/AboutUs";
import Community from "./components/Community";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div id="top" className="font-poppins text-gray-100">
      <Navbar />
      <Hero />
      <CryptoCoins />
      <AboutUs />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
