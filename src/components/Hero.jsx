import React from "react";
import HeroImage from "../assets/hero-image-no-bg.png";
import { BiCheck } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="w-full max-h-fit p-4 overflow-hidden">
      <div className="flex justify-center items-center">
        <div className="flex flex-col xl:flex-row justify-center items-center">
          <div className="flex flex-col gap-6 text-center  xl:text-start xl:w-[50%] xl:p-4">
            <h1 className="text-6xl font-bold xl:w-[75%]">
              Your Ultimate Crypto Currency Tracker
            </h1>
            <h2 className="text-xl font-semibold text-[#FFD700]">
              Stay Ahead of the Pack with Real-Time Crypto Data
            </h2>
            <ul className="flex flex-col justify-center items-center xl:items-start gap-2">
              <li className="flex items-end lg:gap-2">
                <p>
                  Track Live Prices, Market Cap, and Volume of Top
                  Cryptocurrencies
                </p>
                <BiCheck size={40} className="text-[#FFD700]" />
              </li>
              <li className="flex items-end lg:gap-2">
                <p>Get Instant Updates on Price Changes and Market Trends</p>
                <BiCheck size={40} className="text-[#FFD700]" />
              </li>
            </ul>
            <div>
              <button className="bg-[#FFD700] text-[#242424] font-semibold py-3 px-6 rounded-full">
                Check Market
              </button>
            </div>
          </div>
          <div>
            <img src={HeroImage} alt="heroimage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
