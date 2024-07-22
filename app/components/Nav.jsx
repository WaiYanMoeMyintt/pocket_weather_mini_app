import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import CurrentWeather from "./CurrentWeather";
const Nav = () => {
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
          onSubmit={(event) => event.preventDefault()}
          className="search flex md:w-full"
        >
          <input
            type="text"
            className="block w-72 rounded-2xl border-none md:w-full"
            placeholder="Search location or places"
            onChange={(event) => console.log(event.target.value)}
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
