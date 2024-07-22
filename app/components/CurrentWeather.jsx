"use client";
import React, {useEffect, useContext, useState} from 'react';
import moment from "moment";
import { WeatherAPI } from "../context/Weather";
import Image from "next/image";
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
  const weather = useContext(WeatherAPI);
  const [current, setCurrent] = useState([]);

  const [weatherIcon, setWeatherIcon] = useState("");
  // console.log(current);
  const [loading, setLoading] = useState(false);
  const currentWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${weather.lat}&lon=${weather.lon}&appid=40957144dd09f20d66c6d541c84a3adf`;
  //getCurrentWeather API
  useEffect(() => {
    const currentWeatherApp = async () => {
      if (weather.lat && weather.lon) {
        try {
          const getData = await fetch(currentWeatherAPI);
          const resData = await getData.json();
          console.log(resData);
          setCurrent(resData);
          setLoading(true);
        } catch (err) {
          console.error(err.message);
        }
      }
    };
    currentWeatherApp();
  }, [weather]);

  useEffect(() => {
    if (current.weather && current.weather.length > 0) {
      setWeatherIcon(current.weather[0].main);
    }
  }, [current]);

  //get current timezone
  const [localTime, setLocalTime] = useState([]);
  const checkTime = localTime.slice(0, 2);

  const [day, setCurrentDay] = useState("");
  const [date, setCurrentDate] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const localMoment = moment().utcOffset(current.timezone / 60);
      const formatTime = localMoment.format("HH:mm");
      const day = localMoment.format("dddd");
      const date = localMoment.format("MMMM D, YYYY");
      setLocalTime(formatTime);
      setCurrentDay(day);
      setCurrentDate(date);
    }, 1000);
    return () => clearInterval(interval);
  }, [current.timezone]);


  //to define current weather icons
  const setWeatherIcons = () => {
    switch (weatherIcon) {
      case "Cloudy":
        return <Cloudy size={50} />;
      case "Drizzle":
        return <CloudDrizzle size={50} />;
      case "Rain":
        return <CloudRain size={50} />;
      case "Snow":
        return <Snowflake size={50} />;
      case "Clear":
        return <CloudSun size={50} />;
      case "Clouds":
        return <Cloudy size={50} />;
      default:
        return <CloudSun size={50} />;
    }
  };
  return (
    <>
     <div className="current_weather_content shadow-sm mx-2.5 rounded-xl p-4">
          <div className="flex justify-between items-center">
            <h3 className="mb-2.5 text-sm">Now</h3>
            <h3 className="mb-2.5 text-sm">
              {checkTime >= 12 ? <p>{localTime} PM</p> : <p>{localTime} AM</p>}
            </h3>
          </div>
          <div className="weather_title flex gap-4 items-center justify-center">
            <h3 className="text-5xl">
              {Math.round(current?.main?.temp - 273)}°
            </h3>
            <p>{setWeatherIcons()}</p>
          </div>
          <div className="weather_condition flex justify-center items-center mt-4">
            {current?.weather?.map((items, index) => (
              <p className="mt-2.5" key={index}>
                {items?.description}
              </p>
            ))}
          </div>
          <div className="border-b mt-2"></div>
          <div className="weather_location mt-4">
            <div className="time_zone flex my-2.5 gap-2 items-center">
              <Image src = "/calendar.svg" alt = "calendar" width={20} height={20} />
              <p className="text-sm">{day}, {date}</p>
            </div>
            <div className="current_map flex gap-2 items-center my-2.5">
            <Image src = "/map.svg" alt = "calendar" width={20} height={20} />
              <p className="text-sm">
                {current?.name}, {current?.sys?.country}
              </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default CurrentWeather;
