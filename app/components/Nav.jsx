"use client";
import React, { useState, useContext, useRef } from "react";
import Image from "next/image";
import CurrentWeather from "./CurrentWeather";
import { WeatherAPI } from "../context/Weather";
import AuthButton from "./AuthButton";

const Nav = () => {
  const { search, setSearch } = useContext(WeatherAPI);
  const inputData = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(inputData.current.value);
  };

  return (
    <>
      <nav className="mt-4 px-2 py-2.5 flex items-center justify-between gap-4 sm:mx-0 md:mx-40">
        <div className="cursor-pointer nav_logo ">
          <Image
            src="/logo.png"
            width={180}
            height={180}
            className="block"
            alt="logo"
          />
        </div>

        <form onSubmit={handleSubmit} className="search flex w-full ">
          <input
            type="text"
            className="block rounded-2xl border-none w-full"
            placeholder="Search location..."
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
        <AuthButton />
      </nav>
      <CurrentWeather />
    </>
  );
};

Nav.displayName = "Nav";

export default Nav;
