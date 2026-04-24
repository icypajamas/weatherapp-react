import React from "react";

const Middle = () => {
  return (
    <div className="flex flex-col bg-white gap-10 p-6 pt-16 border-l-4 border-pink-400 rounded-l-2xl">
      <div className="flex">
        <span className="text-3xl">Weekly</span>
      </div>
      <div className="flex">
        <span className="text-3xl">Weather</span>
      </div>
    </div>
  );
};

export default Middle;
