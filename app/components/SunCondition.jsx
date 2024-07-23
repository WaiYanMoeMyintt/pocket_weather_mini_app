"use client";
import React, { useContext, useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { WeatherAPI } from "../context/Weather";
const SunCondition = () => {
  const { sun } = useContext(WeatherAPI);
  const { forecast } = sun;
  const currentSun = forecast?.forecastday;

  if (!forecast || !currentSun[0] || !currentSun) {
    return <div>Loading.....</div>;
  }
  console.log(forecast);

  return (
    <div className="pollution  py-4 px-2 rounded-xl mt-2.5">
      <div className="status mb-4 ">
        <h3>Sunrise & Sunset</h3>
      </div>
      <div className="flex justify-between items-center gap-4">
        <div  className="flex gap-2.5 items-center">
          <Moon size={35} />
          <div>
            <h4>Sunrise</h4>
            {currentSun[0] && (
              <p className="text-slate-600 text-sm">
                {currentSun[0]?.astro.sunrise}
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-2.5 items-center">
          <Sun size={35} />
          <div >
            <h4>Sunset</h4>
            {currentSun[0] && (
              <p className="text-slate-600 text-sm">
                {currentSun[0]?.astro.sunset}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunCondition;
