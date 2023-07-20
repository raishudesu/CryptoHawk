import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Community from "./components/Community";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="font-poppins text-gray-100">
      <Navbar />
      <Hero />
      <AboutUs />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
