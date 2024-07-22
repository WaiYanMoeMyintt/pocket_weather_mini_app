"use client";

import React, { useState, useEffect, useContext, createContext } from "react";
import CurrentWeather from "../components/CurrentWeather";
import Nav from "../components/Nav";
export const WeatherAPI = createContext();

const Weather = () => {
  const [lat, setLat] = useState();
  const [lon , setLong] = useState(); 
  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        const api = "http://localhost:3000/api/location";
        const fetchData = await fetch(api);
        const resData = await fetchData.json();
        const weather = resData.map(items => {
          setLat(items?.lat);
          setLong(items?.lon);
        });
        return weather;
     
      } catch (err) {
        console.error(err.message);
      }
    };
    getCurrentLocation();
  }, []);

  return (
    <WeatherAPI.Provider value={{lat,lon}}>
      <Nav />
    </WeatherAPI.Provider>
  );
};

export default Weather;
