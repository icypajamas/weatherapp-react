import React from "react";
import { useState } from "react";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const parts = searchTerm.split(",").map((part) => part.trim());
    const city = parts[0];
    const country = parts[1] || "";

    if (city) {
      onSearch(city, country);
    }
  };

  return (
    <div className="flex bg-gray-200 h-14 justify-between p-1">
      <div className="flex bg-amber-400">Hamburger</div>
      <form
        onSubmit={handleSubmit}
        className="flex bg-gray-200 w-200 justify-center"
      >
        <input
          type="text"
          placeholder="Enter a City"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex rounded-4xl border-2 border-slate-500 w-full pl-10"
        ></input>
      </form>
      <div className="flex bg-amber-400">Toggle theme</div>
    </div>
  );
};

export default Header;
