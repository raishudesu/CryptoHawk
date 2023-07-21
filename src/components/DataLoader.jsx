import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

const DataLoader = () => {
  return (
    <div className="w-full max-h-fit flex justify-center items-center gap-2">
      <div className="text-xl font-semibold">Loading... Please wait</div>
      <BiLoaderCircle size={30} className="animate-spin" />
    </div>
  );
};

export default DataLoader;
