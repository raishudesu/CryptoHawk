import React from "react";
import AboutUsData from "../assets/aboutUs.json";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="w-full max-h-fit overflow-hidden p-4 flex justify-center"
    >
      <div className="w-[75%] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-6 text-center xl:text-start">
          <div className="flex flex-col gap-6 max-w-7xl">
            <h1 className="text-3xl font-bold text-center">
              Why Choose KryptoHawk?
            </h1>
            <div className="">
              <ul className="flex flex-col xl:flex-row justify-center items-center xl:items-start gap-6">
                {AboutUsData.map(({ main, description }, index) => {
                  return (
                    <li
                      key={index}
                      className="shadow-md shadow-violet-500 rounded-lg p-4 md:w-[75%] xl:w-[20%] xl:p-6 hover:shadow-lg hover:shadow-[#FFD700] transition ease-in-out"
                    >
                      <p>
                        <span className="font-bold text-[#FFD700] uppercase">
                          {main}:
                        </span>{" "}
                        <br />
                        {description}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
