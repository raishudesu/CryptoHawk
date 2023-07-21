import React from "react";
import Application from "../assets/cryptoapp.png";

const OurApp = () => {
  return (
    <div className="w-full max-h-fit overflow-hidden p-4">
      <div className="flex justify-center items-center">
        <div className="flex flex-col lg:flex-row justify-center items-center text-center">
          <div className="">
            <img src={Application} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center gap-6 md:w-[75%] xl:w-[50%]">
            <h1 className="text-3xl font-semibold">CryptoHawk Mobile App</h1>
            <p className="break-words p-6 shadow-md shadow-violet-500 max-w-2xl hover:shadow-[#FFD700] hover:shadow-lg transition ease-in-out rounded-lg">
              Discover the power of{" "}
              <span className="font-bold text-[#FFD700]">CryptoHawk</span>'s
              mobile app: real-time crypto data, personalized alerts, and
              in-depth analysis at your fingertips. The intuitive interface
              enables effortless navigation, empowering informed decisions
              anytime, anywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApp;
