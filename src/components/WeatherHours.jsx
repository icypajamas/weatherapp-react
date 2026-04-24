import React from "react";
import { useEffect, useState } from "react";

const placeholderData = {
  city: "Tokyo",
  temperature: 91.1,
  feelslike: 92,
  windspeed: 30,
  humidity: 50,
  visibility: 3.7,
  condition: "Partly Cloudy",
  description: "Similar temperatures continuing with no rain expected.",
  sunrise: "05:29:12",
  sunset: "18:34:12",
};

const WeatherHours = () => {    
  return (
    <div className="flex flex-col gap-2 bg-white text-black flex-1">
      <div className="flex p-4 gap-30">
        <div className="flex flex-col">
          <h1 className=" text-6xl">
            {placeholderData.temperature}°
          </h1>
        </div>

        <div className="flex flex-col">
          <span className="text-2xl ">
            {placeholderData.condition}
          </span>
        </div>
      </div>
      <div className="flex pl-4">
        <span className="text-sm underline">
          {placeholderData.description}
        </span>
      </div>

      <div className="flex p-6 border-t-2 gap-18 border-gray-400">
        <div className="flex flex-col gap-4">
          <div className="flex">
            <h1 className="text-xl">
              Feels like {placeholderData.temperature}°
            </h1>
          </div>
          <div className="flex">
            <span className="text-xl">
              Humidity: {placeholderData.humidity}
            </span>
          </div>
          <div className="flex">
            <span className="text-xl">
              Windspeed: {placeholderData.windspeed}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-l-3 border-dashed border-gray-400 pl-20">
          <div className="flex">
            <span className="text-xl">
              Visibility: {placeholderData.visibility}
            </span>
          </div>
          <div className="flex">
            <span className="text-xl">
              Sunrise: {placeholderData.sunrise}
            </span>
          </div>
          <div className="flex">
            <span className="text-xl">
              Sunset: {placeholderData.sunset}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherHours;
