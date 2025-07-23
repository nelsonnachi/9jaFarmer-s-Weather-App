import React from 'react'
import humidity_icon from "../assets/humidity.png";
import wind from "../assets/wind.png";

const InterpreteForecast = ({weatherData}) => {

  let tempMsg = "";
  if (weatherData.temp >= 35) tempMsg = "	Very hot. Crops may dry up fast. Water in the early morning or late evening. Try not to work in the middle of the day.";
  else if (weatherData.temp >= 28) tempMsg = "Hot. Good for crops like maize and tomatoes. Soil dries quickly—water more often. Best time to work is morning or evening.";
  else if (weatherData.temp >= 20) tempMsg = "Warm but not too hot. Good time to work outside. Crops grow well in this weather.";
  else if (weatherData.temp >= 15) tempMsg = "A bit cold. Some crops may grow slowly. Prepare land or trim plants.";
  else tempMsg = "Very cold. Seeds may take longer to grow. Keep young crops safe and cover the ground to keep it warm.";

  let humidityMsg = "";
  if (weatherData.humidity >= 80) humidityMsg = "The air is very wet. Rain may fall soon. Soil will stay wet longer. Check crops for sickness.";
  else if (weatherData.humidity >= 60) humidityMsg = "The air feels damp. Crops grow well, but pests may come. Watch the leaves and protect plants.";
  else humidityMsg = "Dry air. Good time to harvest. But check soil—if it’s dry, water your farm.";

  let windMsg = "";
  if (weatherData.wind >= 30) windMsg = "Strong wind. It can break young crops or blow away farm tools. Tie tall crops and keep things safe.";
  else if (weatherData.wind >= 15) windMsg = "Gentle wind. Safe time to spray crops if needed. Helps crops like maize to spread pollen.";
  else windMsg = "Calm air. Good day to plant, spray, or harvest without any trouble from the wind.";

  return (
    
    <div className="flex flex-col items-center  justify-between gap-5 lg:flex-row">
        <div className="flex flex-1 flex-col justify-center items-center ">
          <div className="flex flex-col justify-center items-center">
            <img className="w-[100px]" src={weatherData.icon} alt="" />
            <div className="w-full bg-white shadow-md flex items-center gap-5 text-[18px] px-10 mt-5">
              <div className="flex flex-col">
                <span className="text-[18px] font-bold">
                  {weatherData.city} {weatherData.country}
                </span>
                <span className="text-[16px] text-gray-500 capitalize">
                  {weatherData.description}
                </span>
              </div>
              <div className="">
                <span className="text-[24px] font-bold">
                  {weatherData.temp} °C
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 gap-5 justify-center items-center">
            <div className='flex flex-1 flex-col justify-center items-center px-6'>
                <h2 className="text-xl font-bold mb-4">Weather Interpretation</h2>
                <div className="mb-3">
                  <span className="font-semibold">Temperature: </span>
                  <span>{tempMsg}</span>
                </div>
                <div className="mb-3">
                  <span className="font-semibold">Humidity: </span>
                  <span>{humidityMsg}</span>
                </div>
                <div className="mb-3">
                  <span className="font-semibold">Wind Speed: </span>
                  <span>{windMsg}</span>
                </div>
            </div>

        </div>
    </div>

  )
}

export default InterpreteForecast