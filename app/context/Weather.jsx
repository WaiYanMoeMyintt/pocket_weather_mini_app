"use client";

import React, { useState, useEffect, createContext } from "react";
import CurrentWeather from "../components/CurrentWeather";
import Nav from "../components/Nav";
import toast, { Toaster } from 'react-hot-toast';

export const WeatherAPI = createContext();

const Weather = () => {
  const [weather, setWeather] = useState();
  const [search, setSearch] = useState("yangon");
  const [sun, setSun] = useState([]);

  // Notify function
  const notify = React.useCallback(() => toast.success(`${search} is Ready.`), [search]);

  // Get current location
  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        const api = `/api/location?search=${search}`;
        const fetchData = await fetch(api);
        if (!fetchData.ok) {
          throw new Error(`Error fetching data: ${fetchData.statusText}`);
        }
        const resData = await fetchData.json();
        setWeather(resData);
        notify();
      } catch (err) {
        console.error(err.message);
      }
    };
    getCurrentLocation();
  }, [search, notify]); // Include notify in dependencies

  // Get current sun condition
  useEffect(() => {
    const getCurrentSunCondition = async () => {
      try {
        const api = `/api/sun?search=${search}`;
        const fetchData = await fetch(api);
        if (!fetchData.ok) {
          throw new Error(`Error fetching data: ${fetchData.statusText}`);
        }
        const resData = await fetchData.json();
        setSun(resData?.forecast);
      } catch (err) {
        console.error(err.message);
      }
    };
    getCurrentSunCondition();
  }, [search]);

  return (
    <WeatherAPI.Provider value={{ weather, search, setSearch, sun }}>
      <Nav />
      <Toaster reverseOrder={false} position="top-center" /> 
    </WeatherAPI.Provider>
  );
};

Weather.displayName = "Weather"; // Add display name

export default Weather;
