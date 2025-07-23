import React from 'react'
import humidity_icon from "../assets/humidity.png";
import wind from "../assets/wind.png";

const CurrrentForecast = ({weatherData}) => {
  return (
    <div className="flex flex-col items-center justify-between gap-5 lg:flex-row lg:gap-10">
      <div className="flex flex-1 flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <img className="w-[100px]" src={weatherData.icon} alt="" />
          <div className='flex w-full bg-white shadow-md items-center gap-10 text-[18px] px-5 mt-5 lg:gap-2'>
            <div className="flex flex-col " >
              <span className="text-[18px] font-bold">
                {weatherData.city} {weatherData.country}
              </span>
              <span className="text-[16px] text-gray-500 capitalize">
                {weatherData.description}
              </span>
            </div>
            <div className="">
              <span className="text-[24px] flex font-bold lg:text-[28px]">
                {weatherData.temp}<span className='lg:text-[20px]'>°C</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 gap-5 justify-center items-center">
        <div className="bg-blue-500 text-white rounded-2xl py-1 shadow-md">
          <div className="flex flex-col justify-center items-center gap-3 min-w-[140px]">
            <div className="flex items-center gap-3 gap-">
              <img className="w-[30px]" src={humidity_icon} alt="" />
              <div className="flex flex-col ">
                <span className="text-[24px] font-bold">
                  {weatherData.humidity}
                </span>
                <span className="text-[1rem] font-bold">%</span>
              </div>
            </div>
            <div className="flex flex-col text-[14px]">
              <h1>Humidity</h1>
              <span>{weatherData.date}</span>
            </div>
          </div>
        </div>
        <div className="bg-blue-500 text-white rounded-2xl py-1 shadow-md">
          <div className="flex flex-col justify-center items-center gap-3 min-w-[140px]">
            <div className="flex  items-center gap-3 gap-">
              <img className="w-[30px]" src={wind} alt="" />
              <div className="flex flex-col">
                <span className="text-[24px] font-bold">
                  {weatherData.wind}
                </span>
                <span className="text-[1rem] font-bold">Km/h</span>
              </div>
            </div>
            <div className="flex flex-col text-[14px]">
              <h1>Wind Speed</h1>
              <span>{weatherData.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrrentForecast