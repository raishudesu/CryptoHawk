import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full max-h-fit overflow-hidden p-2">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl font-bold">Newsletter</h1>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            placeholder="Your Email"
            className="rounded-full px-6 py-3 outline-violet-500 text-[#242424]"
          />
          <button className=" bg-[#FFD700] text-[#242424] font-bold uppercase rounded-full px-6 py-3 hover:bg-violet-500 hover:text-gray-100 transition ease-in-out">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
