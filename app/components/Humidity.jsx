import React, {useContext} from 'react'
import { Droplets } from 'lucide-react';
import { WeatherAPI } from '../context/Weather';
const Humidity = () => {
  const {weather} = useContext(WeatherAPI);
  const {current, location} = weather;
  console.log(current); 

  if(!current){
    return <div>Loading...</div>
  }
  return (
    <div className="pollution  py-4 px-2 rounded-xl mt-2.5">
         <div className = "status mb-4 ">
              <h3>Humidity</h3>
         </div>
         <div className  = "flex justify-between items-center gap-4">
            <Droplets size = {35}/>
            <p className = "text-slate-600 text-base">{current?.humidity} hPa</p>
         </div>
    </div>
  )
}

export default Humidity