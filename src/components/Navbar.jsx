import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { LuMoonStar } from "react-icons/lu";
import { CgDarkMode } from "react-icons/cg";
import { Link } from "react-scroll";
import Logo from "../assets/logo-icon.png";

const Navbar = () => {
  const [theme, setTheme] = useState(null);
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

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="transition ease-in-out shadow-md sticky top-0 flex justify-between md:justify-between lg:justify-evenly items-center h-20 w-full mx-auto px-4 text-black  bg-white dark:bg-[#242424] dark:text-white z-30">
      <div className="flex items-center gap-4 group text-3xl font-bold cursor-pointer">
        <div className="w-[40px]">
          <img src={Logo} alt="" />
        </div>

        <Link to="top" spy={true} smooth={true} duration={500}>
          CryptoHawk
        </Link>
      </div>

      <ul className="hidden md:flex justify-end 2xl:w-[40%]">
        <Link
          to="top"
          spy={true}
          smooth={true}
          duration={500}
          className="p-3 uppercase hover:text-[#FFD700] transition ease-in-out rounded-xl font-semibold cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="market"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="p-3 uppercase hover:text-[#FFD700] transition ease-in-out rounded-xl font-semibold cursor-pointer"
        >
          Market
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="p-3 uppercase hover:text-[#FFD700] transition ease-in-out rounded-xl font-semibold cursor-pointer"
        >
          About Us
        </Link>
        <div
          onClick={toggleTheme}
          className="flex justify-center items-center cursor-pointer"
        >
          <LuMoonStar size={25} className="m-2" />
        </div>
      </ul>
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
            ? "flex flex-col items-center py-6 fixed left-0 top-0 h-full w-[75%] border-r bg-[#242424] dark:text-white dark:border-r-black ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <Link
          to="top"
          spy={true}
          smooth={true}
          duration={500}
          className="group text-3xl font-bold cursor-pointer "
        >
          CryptoHawk
        </Link>
        <ul className="uppercase p-4 flex flex-col text-center">
          <Link
            to="top"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleNav}
            className="p-3 hover:text-[#FFD700] rounded-xl font-semibold cursor-pointer"
          >
            Home
          </Link>
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
          <div
            onClick={toggleTheme}
            className="flex justify-center items-center cursor-pointer"
          >
            <CgDarkMode size={30} className="m-2" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
