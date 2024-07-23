"use client";

import React, { useState, useEffect, useContext, createContext } from "react";
import CurrentWeather from "../components/CurrentWeather";
import Nav from "../components/Nav";
export const WeatherAPI = createContext();

const Weather = () => {
    const [weather, setWeather] = useState();
    const [search, setSearch] = useState("yangon");
    console.log(weather);
    //get_current_location
    useEffect(() => {
        const getCurrentLocation = async () => {
            try {
                const api = `/api/location?search=${search}`;
                const fetchData = await fetch(api);
                const resData = await fetchData.json();
                setWeather(resData);
            } catch (err) {
                console.error(err.message);
            }
        };
        getCurrentLocation();
    }, [search]);

    return (
        <WeatherAPI.Provider value={{weather, search, setSearch }}>
            <Nav />
        </WeatherAPI.Provider>
    );
};

export default Weather;
