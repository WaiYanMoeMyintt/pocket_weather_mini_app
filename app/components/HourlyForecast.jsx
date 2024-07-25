"use client";
import React, { useContext, useState, useEffect } from "react";
import { WeatherAPI } from "../context/Weather";
import Image from "next/image";
import Loader from "./Loader";
import { Pagination } from "swiper/modules";
import { Swiper, div } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const HourlyForecast = () => {
  const { sun } = useContext(WeatherAPI);
  const { forecastday } = sun;

  console.log(forecastday);
 
  const time = 12;

  if (!sun || !forecastday) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="current_weather_content h-full mx-2.5 rounded-xl p-4 mt-4">
      <h3 className="mb-4 flex">Hourly Forecast</h3>
      <div className="py-1 px-1 w-full flex justify-between items-center">
        {forecastday &&
          forecastday.slice(0, 1).map((days, index) => (
            <div
              key={index}
              className="current_weather_content w-full py-2 px-4 rounded-md shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <div
                className=" w-full hourly"
              >
                {days?.hour?.map((icons, index) => (
                  <div key = {index} className="pollution text-center flex items-center flex-col py-1 px-2 rounded-md shadow-md hover:shadow-lg transition-all cursor-pointer ">
                    <h3 className="time_title text-sm text-slate-600 mb-2.5">
                      {icons?.time?.slice(11, 13)}
                      {/* {time > icons?.time?.slice(12, 13) ? "AM" : "PM" } */}
                    </h3>
                    <Image
                      src={`https:${icons?.condition?.icon}`}
                      width={40}
                      height={40}
                      alt="icon"
                    />
                    <p className=" text-sm mt-2">
                      {Math.round(icons?.temp_c)}°
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-center w-full text-slate-600 text-sm mt-5">Made in Myanmar</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
