"use client";
import React, { useContext, useState, useEffect } from "react";
import { WeatherAPI } from "../context/Weather";
const timestamp = require("unix-timestamp");
import Image from "next/image";
import Loader from "./Loader";
const FiveWeather = () => {
  const { sun } = useContext(WeatherAPI);
  const { forecast } = sun;
  const currentSun = forecast?.forecastday;
  const [currentDate, setCurrentDate] = useState([]);

  // const getCurrentWeather = currentSun?.map((items) => {
  //   const date_epoch = items?.date_epoch;
  //   const date = date_epoch?.map(items=>{
  //       return items;
  //   })
  //   return date;
  // });
  console.log(currentSun)

  // console.log(currentDate);
  const dateFromTimestamp = timestamp.toDate(1722124800);

  if (!forecast || !currentSun[0] || !currentSun) {
    return <div>
      <Loader />
    </div>;
  }

  return (
    <div className="current_weather_content h-full mx-2.5 rounded-xl p-4 mt-4">
      <h3 className="mb-4 flex"> 5 day's weather forecast</h3>
      <div className="weather_highlights py-1 px-1 w-full">
        <div className="">
          <p className="title">29,Mon</p>
          <Image
            src={`https://cdn.weatherapi.com/weather/64x64/day/308.png`}
            alt="weaterh"
            width={30}
            height={30}
          />
          <p>29°</p>
        </div>
      </div>
    </div>
  );
};

export default FiveWeather;
