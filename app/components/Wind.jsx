import React, { useContext } from "react";
import { Feather } from "lucide-react";
import { WeatherAPI } from "../context/Weather";
const Wind = () => {
  const { weather } = useContext(WeatherAPI);
  const { current, location } = weather;
  
  if(!current.air_quality){
    return null;
 }
  return (
    <div className="pollution  py-4 px-2 rounded-xl mt-2.5">
      <div className="status mb-4">
        <h3>Wind</h3>
      </div>
      <div className="flex justify-between items-center gap-4">
        <Feather size={35} />
        <p className="text-slate-300 text-base sm:text-sm">{current?.wind_mph} mpH</p>
      </div>
    </div>
  );
};

export default Wind;
