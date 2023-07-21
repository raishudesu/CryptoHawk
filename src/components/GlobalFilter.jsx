import React from "react";

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-center lg:justify-start items-center gap-2 py-2">
      <h1 className="text-lg font-bold">Search: </h1>
      <input
        className="text-black p-2 rounded-full outline-violet-500"
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default GlobalFilter;
