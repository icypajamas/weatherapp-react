import React from "react";
import WeatherCard from "./weatherCard";
import Banner from "./Banner";
import WeatherHours from "./WeatherHours";
import Middle from "./Middle";

const WeatherToday = () => {

  return (
    <>
      <div className="flex flex-col">
        <Banner></Banner>
        <div className="flex">
          <WeatherCard></WeatherCard>
          {/* <Middle></Middle> */}
          {/* <WeatherHours></WeatherHours> */}
        </div>
      </div>
    </>
  );
};

export default WeatherToday;
