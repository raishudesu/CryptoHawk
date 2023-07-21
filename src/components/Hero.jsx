import React from "react";
import { Link as ScrollLink } from "react-scroll";
import OurApp from "./OurApp";
import HeroImage from "../assets/hero-image-no-bg.png";
import { BiCheck } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="w-full max-h-fit p-4 overflow-hidden">
      <div className="flex flex-col justify-center items-center">
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
              <ScrollLink
                to="market"
                spy={true}
                offset={-100}
                smooth={true}
                duration={500}
                className="bg-[#FFD700] text-[#242424] cursor-pointer font-semibold py-3 px-6 rounded-full hover:bg-violet-500 hover:text-gray-100 transition ease-in-out"
              >
                Check Market
              </ScrollLink>
            </div>
          </div>
          <div className="mt-6">
            <img src={HeroImage} alt="heroimage" />
          </div>
        </div>
        <OurApp />
      </div>
    </div>
  );
};

export default Hero;
