import React, { useContext } from "react";
import { ThermometerSun } from "lucide-react";
import { WeatherAPI } from "../context/Weather";
const Temperature = () => {
  const { weather } = useContext(WeatherAPI);
  const { current, location } = weather;

  if (!current) {
    return null;
  }
  return (
    <div className="pollution  py-4 px-2 rounded-xl mt-2.5">
      <div className="status mb-4 ">
        <h3>Feel Like</h3>
      </div>
      <div className="flex justify-between items-center gap-4">
        <ThermometerSun size={35} />
        <p className="text-slate-300 text-base sm:text-sm">{Math.round(current?.temp_c)}°C</p>
      </div>
    </div>
  );
};

export default Temperature;
