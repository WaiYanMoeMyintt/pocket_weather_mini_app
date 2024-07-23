import React, {useContext} from 'react'
import { Cloud } from 'lucide-react';
import { WeatherAPI } from '../context/Weather';

const Preci = () => {
    const {weather} = useContext(WeatherAPI);
    const {current, location} = weather;
  
    if(!current){
      return <div>Loading...</div>
    }
  return (
    <div className="pollution  py-4 px-2 rounded-xl mt-2.5">
    <div className = "status mb-4 ">
         <h3>Precipitation </h3>
    </div>
    <div className  = "flex justify-between items-center gap-4">
       <Cloud size = {35}/>
       <p className = "text-slate-600 text-base">{current?.precip_mm} mm</p>
    </div>
</div>
  )
}

export default Preci