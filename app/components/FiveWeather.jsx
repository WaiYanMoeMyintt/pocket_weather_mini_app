"use client";
import React, { useContext, useState, useEffect } from "react";
import { WeatherAPI } from "../context/Weather";
import Image from "next/image";
import Loader from "./Loader";
const FiveWeather = () => {
  const { sun } = useContext(WeatherAPI);
  const { forecastday } = sun;

  const date = new Date();
  console.log(date);

  if (!sun || !forecastday) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="current_weather_content h-full mx-2.5 rounded-xl p-4 mt-4">
      <h3 className="mb-4 flex"> 5 day's weather forecast</h3>
      <div className="py-1 px-1 w-full flex justify-between items-center">
        {forecastday &&
          forecastday.map((days, index) => (
            <div className="pollution py-2 px-4 rounded-md shadow-md hover:shadow-lg transition-all cursor-pointer">
              <h3 className="time_title text-center text-base" key={index}>
                {days.date.slice(8, 10)}
              </h3>
              <Image
                src={`https:${days?.day?.condition?.icon}`}
                alt={days?.day?.condition?.text}
                width={40}
                height={40}
              />
              <p className="text-center text-sm mt-2">{Math.round(days?.day?.avgtemp_c)}°</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FiveWeather;
