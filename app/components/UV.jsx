import React, {useContext} from 'react'
import { Zap } from 'lucide-react';
import { WeatherAPI } from '../context/Weather';
const UV = () => {
    const {weather} = useContext(WeatherAPI);
    const {current, location} = weather;
  
    if(!current){
      return null;
    }
  return (
    <div className="pollution  py-4 px-2 rounded-xl mt-2.5">
    <div className = "status mb-4 ">
         <h3>UltraViolet</h3>
    </div>
    <div className  = "flex justify-between items-center gap-4">
       <Zap size = {35}/>
       <p className = "text-slate-600 text-base">{current?.uv} uv</p>
    </div>
</div>
  )
}

export default UV