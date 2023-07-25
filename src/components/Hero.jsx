import React from "react";
import { Link as ScrollLink } from "react-scroll";
import OurApp from "./OurApp";
import HeroImage from "../assets/hero-image-no-bg.png";
import { BiCheck } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="w-full max-h-fit overflow-hidden flex justify-center">
      <div className="w-[75%] flex flex-col justify-center items-center">
        <div className="flex flex-col xl:flex-row justify-center items-center">
          <div className="flex flex-col gap-2 text-center  xl:text-start xl:w-[50%]">
            <h1 className="text-6xl font-bold">
              The Ultimate Crypto Currency Tracker
            </h1>
            <h2 className="text-xl font-bold text-[#FFD700]">
              Stay Ahead of the Pack with Real-Time Crypto Data
            </h2>
            <ul className="flex flex-col justify-center items-center xl:items-start">
              <li className="flex items-center lg:gap-2">
                <p>
                  Track Live Prices, Market Cap, and Volume of Top
                  Cryptocurrencies
                </p>
                <BiCheck size={40} className="text-[#FFD700]" />
              </li>
              <li className="flex items-center lg:gap-2">
                <p>Get Instant Updates on Price Changes and Market Trends</p>
                <BiCheck size={40} className="text-[#FFD700]" />
              </li>
            </ul>
            <div className="mt-4">
              <ScrollLink
                to="market"
                spy={true}
                offset={-100}
                smooth={true}
                duration={500}
                className="bg-[#FFD700] text-[#242424] uppercase cursor-pointer font-bold py-4 px-8 rounded-full hover:bg-violet-500 hover:text-gray-100 transition ease-in-out"
              >
                Current Market
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
