import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const Community = () => {
  return (
    <div className="w-full max-h-fit overflow-hidden p-4">
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center gap-6">
          <div className="text-3xl font-bold">
            <h1>Join the CryptoHawk Community!</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-6 md:w-[75%] xl:w-[50%]">
            <p>
              Join a vibrant community of crypto enthusiasts like yourself.
              Engage in discussions, share insights, and learn from others'
              experiences in the CryptoHawk community.
            </p>
            <div className="flex justify-center items-center gap-6">
              <FaDiscord
                size={30}
                className="cursor-pointer hover:text-[#FFD700] transition ease-in-out"
              />
              <FaTwitter
                size={30}
                className="cursor-pointer hover:text-[#FFD700] transition ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
