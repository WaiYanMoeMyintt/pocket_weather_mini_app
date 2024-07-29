'use client';
import React, { useState, useEffect, useContext, useRef } from "react";
import Image from "next/image";
import { WeatherAPI } from "../context/Weather";
import { DropdownMenu } from "@/@/components/ui/dropdown-menu";
import { Button } from "@/@/components/ui/button";
const WeatherMenu = () => {
    const {search, setSearch} = useContext(WeatherAPI);
    const inputData  = useRef(null);
 
   const handleSubmit = (event)=>{
        event.preventDefault();
        setSearch(inputData.current.value);
   }
  return (
    <nav className="mt-4 px-2 py-2.5 flex items-center justify-between gap-4  sm:mx-0 md:mx-40">
        <div className="cursor-pointer nav_logo ">
          <Image
            src="/logo.png"
            width={180}
            height={180}
            className="block"
            alt="logo"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="search flex w-full "
        >
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
      </nav>
  )
}

export default WeatherMenu