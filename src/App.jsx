import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoinsTable from "./components/CoinsTable";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div id="top" className="font-outfit text-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/morestats" element={<CoinsTable />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
