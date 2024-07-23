import React from "react";
import Pollution from "./Pollution";
import SunCondition from "./SunCondition";
import Wind from "./Wind";
import Humidity from "./Humidity";
import Preci from "./Preci";
import UV from "./UV";
import Temperature from "./Temperature";
const WeatherHighLight = () => {
  return (
    <div className="current_weather_content h-full mx-2.5 rounded-xl p-4 mt-4">
      <h3 className="mb-4">Today Weather Condition</h3>
      <Pollution />
      <SunCondition />
      <div className="weather_highlights py-1 px-1 w-full">
        <Wind />
        <UV />
        <Humidity />
        <Preci />
        <Temperature />
      </div>
    </div>
  );
};

export default WeatherHighLight;
