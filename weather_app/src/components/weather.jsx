import React from 'react'
import './weather.css'
import search_icon from '../assets/search.png'
import clear from '../assets/clear.png'
import cloud from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import wind from '../assets/wind.png'
import { useEffect } from 'react'

const weather = () => {

    const search =async (city)=>{
      try{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`;

        const response=await fetch(url);
        const data=await response.json();
        console.log(data);
      }catch(error){

      }
    };

    useEffect(() =>{
      search("London");
    },[])

  return (
    <div className='weather'>
        <div className='search_bar'>
            <input type="text" placeholder='search'/>
            <img src={search_icon} alt="" />
        </div>
        <img src={clear} alt="" className='weather-icon'/>
        <p className ='temp'> 16c</p>
        <p className ='loc'> london</p>
        <div className="weather-data">
          <div className="col">
            <img src={humidity} alt="" />
            <div>
              <p> 81%</p>
              <span> Humidity</span>
            </div>
          </div>
          <div className="col">
            <img src={wind} alt="" />
            <div>
              <p> 3.6km/h</p>
              <span> Wind Speed</span>
            </div>
          </div>
        </div>
    
    </div>
  )
}

export default weather