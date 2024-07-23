"use client";

import React, { useState, useEffect, useContext, createContext } from "react";
import CurrentWeather from "../components/CurrentWeather";
import Nav from "../components/Nav";
export const WeatherAPI = createContext();

const Weather = () => {
    const [weather, setWeather] = useState();
    const [search, setSearch] = useState("yangon");
    const [sun, setSun] = useState([]);
    
    //get_current_location
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
            } catch (err) {
                console.error(err.message);
            }
        };
        getCurrentLocation();
    }, [search]);

    // get_current_sun_condition
    useEffect(() => {
        const getCurrentLocation = async () => {
            try {
                const api = `/api/sun?search=${search}`;
                const fetchData = await fetch(api);
                if (!fetchData.ok) {
                    throw new Error(`Error fetching data: ${fetchData.statusText}`);
                }
                const resData = await fetchData.json();
                setSun(resData);
            } catch (err) {
                console.error(err.message);
            }
        };
        getCurrentLocation();
    }, [search]);

    console.log(sun);
    return (
        <WeatherAPI.Provider value={{ weather, search, setSearch, sun }}>
            <Nav />
        </WeatherAPI.Provider>
    );
};

export default Weather;
