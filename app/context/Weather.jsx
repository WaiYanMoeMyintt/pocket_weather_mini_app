"use client";

import React, { useState, useEffect, useContext, createContext } from "react";
import CurrentWeather from "../components/CurrentWeather";
import Nav from "../components/Nav";
export const WeatherAPI = createContext();

const Weather = () => {
    const [lat, setLat] = useState();
    const [lon, setLong] = useState();
    const [search, setSearch] = useState("yangon");

    useEffect(() => {
        const getCurrentLocation = async () => {
            try {
                const api = `/api/location?search=${search}`;
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
    }, [search]);

    return (
        <WeatherAPI.Provider value={{ lat, lon, search, setSearch }}>
            <Nav />
        </WeatherAPI.Provider>
    );
};

export default Weather;
