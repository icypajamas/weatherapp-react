import React from "react";


const Banner = ({data}) => {
  const general = data.general;

  return (
    <div
      className="relative h-80 bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('night.avif')" }}
    >
      <div className="flex flex-col justify-end h-full">
        <div className="flex flex-col pl-6 pb-10 gap-4 text-white">
          <h1 className="text-6xl font-extralight">{general.address}</h1>
          <p className="text-2xl font-extralight">{general.timezone}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
