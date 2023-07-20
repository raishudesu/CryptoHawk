import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full max-h-fit overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl font-bold">Newsletter</h1>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            placeholder="Your Email"
            className="rounded-full px-6 py-3"
          />
          <button className=" bg-[#FFD700] text-black font-semibold rounded-full px-6 py-3">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
