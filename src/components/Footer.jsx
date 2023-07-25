import React from "react";
import Newsletter from "./Newsletter";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import Logo from "../assets/logo-icon.png";

const Footer = () => {
  return (
    <div className="w-full max-h-fit overflow-hidden bg-black py-4">
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="w-[50px]">
          <img src={Logo} alt="" />
        </div>
        <Newsletter />
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex justify-center items-center gap-1">
            <AiOutlineCopyrightCircle className="text-[#FFD700]" />
            <h1 className="font-bold uppercase">KryptoHawk 2023</h1>
          </div>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
