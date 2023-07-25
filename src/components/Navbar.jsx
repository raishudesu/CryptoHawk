import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../assets/logo-icon.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth;
      if (innerWidth >= 768) {
        setNav(nav);
        return;
      }
    };
    // Attach event listener on component mount
    window.addEventListener("resize", handleResize);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="overflow-hidden bg-[#242424] shadow-md sticky top-0 flex justify-between sm:justify-center items-center h-20 w-full mx-auto px-4 z-30">
      <div className="w-[75%] flex justify-between items-center">
        <div className="flex items-center gap-4 group text-2xl font-bold uppercase cursor-pointer">
          <div className="w-[35px]">
            <img src={Logo} alt="" />
          </div>

          <Link to="top" spy={true} smooth={true} duration={500}>
            KryptoHawk
          </Link>
        </div>

        <ul className="hidden md:flex">
          <RouterLink
            to="/"
            className="p-3 uppercase hover:text-[#FFD700] rounded-xl font-semibold cursor-pointer"
          >
            Home
          </RouterLink>
          <Link
            to="market"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="p-3 uppercase hover:text-[#FFD700] rounded-xl font-semibold cursor-pointer"
          >
            Market
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="p-3 uppercase hover:text-[#FFD700] rounded-xl font-semibold cursor-pointer"
          >
            About Us
          </Link>
        </ul>
      </div>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={20} className="cursor-pointer" />
        ) : (
          <AiOutlineMenu size={20} className="cursor-pointer" />
        )}
      </div>
      <div
        className={
          nav
            ? "flex flex-col items-center py-6 fixed left-0 top-0 h-full w-[75%] border-r border-gray-700 bg-[#242424] ease-in-out duration-500"
            : "fixed left-[-150%]"
        }
      >
        <Link
          to="top"
          spy={true}
          smooth={true}
          duration={500}
          className="group text-3xl font-bold cursor-pointer w-[60px] "
        >
          <img src={Logo} alt="" />
        </Link>
        <ul className="uppercase p-4 flex flex-col text-center">
          <RouterLink
            to="/"
            onClick={handleNav}
            className="p-3 hover:text-[#FFD700] rounded-xl font-semibold cursor-pointer"
          >
            Home
          </RouterLink>
          <Link
            to="market"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleNav}
            className="p-3 hover:text-[#FFD700] rounded-xl font-semibold cursor-pointer "
          >
            Market
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleNav}
            className="p-3 hover:text-[#FFD700] rounded-xl font-semibold cursor-pointer "
          >
            About Us
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
