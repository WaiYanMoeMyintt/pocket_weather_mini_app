"use client";
import React, { useEffect, useContext, useState } from "react";
import moment from "moment";
import { WeatherAPI } from "../context/Weather";
import Image from "next/image";
import WeatherHighLight from "./WeatherHighLight";
import FiveWeather from "./FiveWeather";
import Loader from "./Loader";
import HourlyForecast from "./HourlyForecast";
import {
  MapPin,
  Cloud,
  CloudSun,
  Cloudy,
  CloudDrizzle,
  CloudRain,
  Snowflake,
} from "lucide-react";
const CurrentWeather = () => {
  const { weather } = useContext(WeatherAPI);

  if (!weather) {
    // Handle the case where weather is undefined
    return (
      <div className="w-full  flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  const { current, location } = weather;
  const checkTime = current?.last_updated.slice(11, 13);

  return (
    <>
      <div className="current_weather_content shadow-sm mx-2.5 rounded-xl p-4">
        <div className="flex justify-between items-center">
          <h3 className="mb-2.5 text-sm">Now</h3>
          <h3 className="mb-2.5 text-sm">
            {checkTime >= 12 ? (
              <p>{current?.last_updated.slice(11, 16)} PM</p>
            ) : (
              <p>{current?.last_updated.slice(11, 16)} AM</p>
            )}
          </h3>
        </div>
        <div className="weather_title flex gap-4 items-center justify-center">
          <h3 className="text-5xl">{Math.round(current?.temp_c)}°</h3>
          <Image
            src={`https:${current?.condition?.icon}`}
            width={80}
            height={80}
            alt="weather"
          />
        </div>
        <div className="weather_condition flex justify-center items-center mt-4">
          <p className="mt-2.5">{current?.condition?.text}</p>
        </div>
        <div className="border-b mt-2"></div>
        <div className="weather_location mt-4">
          <div className="time_zone flex my-2.5 gap-2 items-center">
            <Image src="/calendar.svg" alt="calendar" width={20} height={20} />
            <p className="text-sm text-slate-600">
              {current?.last_updated.slice(0, 11)}
            </p>
          </div>
          <div className="current_map flex gap-2 items-center my-2.5">
            <Image src="/map.svg" alt="calendar" width={20} height={20} />
            <p className="text-sm text-slate-600">
              {location?.name}, {location?.country}
            </p>
          </div>
        </div>
      </div>
      <FiveWeather />
      <WeatherHighLight />
      <HourlyForecast />
    </>
  );
};

export default CurrentWeather;
