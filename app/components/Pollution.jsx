import React, {useContext, useState} from 'react'
import { WeatherAPI } from '../context/Weather'
import { Wind } from "lucide-react";
const Pollution = () => {
    const {weather} = useContext(WeatherAPI);
    const {current, location} = weather;

  if(!current.air_quality){
     return null;
  }
  return (
<div className="pollution  py-4 px-2 rounded-xl w-full">
      <div className="status flex justify-between items-center">
        <h3>Air Quality</h3>
        <button className="bg-blue-600 text-white text-sm py-1 px-4 rounded-xl">
          Good
        </button>
      </div>

      <div className="condition  flex justify-between items-center mt-4">
        <Wind size={35} />
        <div className="flex gap-8 text-center">
          <div className="flex flex-col">
            <h3>PM25</h3>
            <span className="text-sm text-slate-300">{current?.air_quality?.pm2_5}</span>
          </div>
          <div className="flex flex-col">
            <h3 >PM10</h3>
            <span className="text-sm text-slate-300">{current?.air_quality?.pm10}</span>
          </div>
          <div className="flex flex-col">
            <h3 >NO2</h3>
            <span className="text-sm text-slate-300">{current?.air_quality?.no2}</span>
          </div>
          <div className="flex flex-col">
            <h3 >SO2</h3>
            <span className="text-sm text-slate-300">{current?.air_quality?.so2}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pollution