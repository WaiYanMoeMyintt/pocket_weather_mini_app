import React, { useContext } from "react";
import { Gauge } from 'lucide-react';
import { WeatherAPI } from "../context/Weather";
const Pressures = () => {
  const { weather } = useContext(WeatherAPI);
  const { current, location } = weather;


  console.log(current);
  if(!current.air_quality){
    return null;
 }
  return (
    <div className="pollution  py-4 px-2 rounded-xl mt-2.5">
      <div className="status mb-4">
        <h3>Pressure</h3>
      </div>
      <div className="flex justify-between items-center gap-4">
        <Gauge size={35} />
        <p className="text-slate-600 text-base">{current?.pressure_mb} Pa</p>
      </div>
    </div>
  );
};

export default Pressures;
