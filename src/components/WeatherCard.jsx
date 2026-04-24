import React from "react";
import { useEffect, useState } from "react";



const WeatherCard = ({data}) => {

  const general = data.general;
  const conditions = data.conditions;

  return (
    <div className="flex flex-col  gap-2 rounded-2xl bg-white text-black">
      <div className="flex p-4 gap-30">
        <div className="flex flex-col">
          <h1 className=" text-6xl">
            {conditions.temperature}°
          </h1>
        </div>

        <div className="flex flex-col">
          <span className="text-2xl ">
            {conditions.condition}
          </span>
        </div>
      </div>
      <div className="flex pl-4">
        <span className="text-sm underline">
          {general.description}
        </span>
      </div>

      <div className="flex p-6 border-t-2 gap-18 border-gray-400">
        <div className="flex flex-col gap-4">
          <div className="flex">
            <h1 className="text-xl">
              Feels like {conditions.feelslike}°
            </h1>
          </div>
          <div className="flex">
            <span className="text-xl">
              Humidity: {conditions.humidity}
            </span>
          </div>
          <div className="flex">
            <span className="text-xl">
              Windspeed: {conditions.windspeed}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-l-3 border-dashed border-gray-400 pl-20">
          <div className="flex">
            <span className="text-xl">
              Visibility: {conditions.visibility}
            </span>
          </div>
          <div className="flex">
            <span className="text-xl">
              Sunrise: {conditions.sunrise}
            </span>
          </div>
          <div className="flex">
            <span className="text-xl">
              Sunset: {conditions.sunset}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
