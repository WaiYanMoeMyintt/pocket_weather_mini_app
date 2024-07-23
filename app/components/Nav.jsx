import React, { useState, useEffect, useContext, useRef } from "react";
import Image from "next/image";
import CurrentWeather from "./CurrentWeather";
import { WeatherAPI } from "../context/Weather";
import WeatherHighLight from "./WeatherHighLight";
const Nav = () => {
   const {search, setSearch} = useContext(WeatherAPI);
   const inputData  = useRef(null);

  const handleSubmit = (event)=>{
       event.preventDefault();
       setSearch(inputData.current.value);
  }
  // console.log(search);
  return (
    <>
      <nav className="flex items-center justify-between px-2 gap-4">
        <div className="cursor-pointer ">
          <Image
            src="/assets/weather_logo.png"
            width={1000}
            height={1000}
            className="block w-28 h-28"
            alt="logo"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="search flex md:w-full"
        >
          <input
            type="text"
            className="block w-72 rounded-2xl border-none md:w-full"
            placeholder="Search location or places"
            ref={inputData}
          />
          <Image
            className="cursor-pointer"
            src="/assets/search.svg"
            width={25}
            height={25}
            alt="logo"
          />
        </form>
        <div className="location p-2 rounded-2xl cursor-pointer">
          <Image src="/assets/position.svg" width={25} height={25} alt="logo" />
        </div>
      </nav>
      <CurrentWeather />
    </>
  );
};

export default Nav;
