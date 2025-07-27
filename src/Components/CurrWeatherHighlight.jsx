import logo from "../assets/sun-cloudy.png";
import compass from "../assets/compass.png";
import drops from "../assets/drops.png";
import ultraviolet from "../assets/ultraviolet.png";
import rain from "../assets/rain.png";

const CurrWeatherHighlight = ({ weatherData }) => {
  let tempMsg = "";
  if (weatherData.temp >= 35) tempMsg = "Very Hot";
  else if (weatherData.temp >= 28) tempMsg = "Hot";
  else if (weatherData.temp >= 20) tempMsg = "Normal";
  else if (weatherData.temp >= 15) tempMsg = "Cool";
  else tempMsg = "Cold";

  let humidityMsg = "";
  if (weatherData.humidity >= 80) humidityMsg = "Saturated";
  else if (weatherData.humidity >= 70) humidityMsg = "Very humid";
  else if (weatherData.humidity >= 60) humidityMsg = "Humid";
  else if (weatherData.humidity >= 50) humidityMsg = "Mildly humid";
  else if (weatherData.humidity >= 30) humidityMsg = "Comfortable";
  else humidityMsg = "Very dry";

  let cloudMsg = "";
  if (weatherData.humidity >= 90) cloudMsg = "Overcast";
  else if (weatherData.humidity >= 70) cloudMsg = "Very cloudy	";
  else if (weatherData.humidity >= 50) cloudMsg = "Mostly cloudy";
  else if (weatherData.humidity >= 30) cloudMsg = "Partly cloudy";
  else if (weatherData.humidity >= 10) cloudMsg = "Mostly sunny";
  else humidityMsg = "Clear skies";

  let windMsg = "";
  if (weatherData.wind >= 32) windMsg = "Very wind";
  else if (weatherData.wind >= 25) windMsg = "Strong breeze";
  else if (weatherData.wind >= 19) windMsg = "Fresh breeze";
  else if (weatherData.wind >= 13) windMsg = "Steady wind";
  else if (weatherData.wind >= 8) windMsg = "Gentle breeze";
  else if (weatherData.wind >= 4) windMsg = "Light breeze";
  else windMsg = "Still air";

  return (
    <div>
      <div>
        <h1 className="text-xl font-bold pt-5 lg:pt-1">
          Weather Highlight
        </h1>
        <div className="flex flex-col gap-3 lg:flex-row lg:justify-around  lg:items-center">
          {/* two stack 1*/}
          <div className="flex flex-col gap-3 mt-5 xl:flex-row xl:flex-1">
            <div
              className="bg-[#fdfdfd] flex items-center justify-between gap-5 mt-5 lg:mt-3 lg:flex-col shadow-md py-3 px-5 rounded-2xl xl:w-[100px] xl:h-[180px]"
            >
              <div>
                <img className="h-[40px] w-[40px]" src={compass} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="font-bold">Weather</h2>
                <h2 className="text-gray-500 text-sm">{tempMsg}</h2>
              </div>
              <div className="lg:flex">
                <span className="text-[20px] font-bold">
                  {weatherData.temp}
                  <span className="text-[16px] font-vold">°C</span>
                </span>
              </div>
            </div>

            <div
              className="bg-[#fdfdfd] flex items-center justify-between gap-3 mt-5 lg:mt-3 lg:flex-col shadow-md py-3 px-5 rounded-2xl xl:w-[100px] xl:h-[180px]"
            >
              <div>
                <img className="h-[5 0px] w-[50px]" src={logo} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="font-bold">Cloud</h2>
                <h2 className="text-gray-500 text-sm text-center">{cloudMsg}</h2>
              </div>
              <div className="lg:flex">
                <span className="text-[20px] font-bold">
                  {weatherData.clouds}
                  <span className="text-[16px] font-bold">%</span>
                </span>
              </div>
            </div>
          </div>
          {/* two stack 2*/}
          <div className="flex flex-col lg:pt-5 xl:flex-row gap-3">
            <div
              className="bg-[#fdfdfd] flex items-center justify-between gap-5 mt-5 lg:mt-3 lg:flex-col shadow-md py-3 px-5 rounded-2xl lg:gap-0 xl:w-[100px] xl:h-[180px]"
            >
              <div>
                <img className="h-[40px] w-[40px]" src={ultraviolet} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="font-bold">Sunrise</h2>
                <h2 className="text-gray-500 text-sm">{weatherData.sunrise}</h2>
              </div>
              <div>                
                  <span className="text-[14px] font-bold">WAT</span>
              </div>
            </div>

            <div
              className="bg-[#fdfdfd] flex items-center justify-between gap-3 mt-5 lg:mt-3 lg:flex-col shadow-md py-3 px-5 rounded-2xl lg:gap-0 xl:w-[100px] xl:h-[180px]"
            >
              <div>
                <img className="h-[40px] w-[40px]" src={ultraviolet} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h2 className="font-bold">Sunset</h2>
                <h2 className="text-gray-500 ">{weatherData.sunset}</h2>
              </div>
              <div>
                <span className="text-[14px] font-bold">WAT</span>
              </div>
            </div>
          </div>
          {/* two stack 3*/}
          <div className="flex flex-col mt-0 xl:flex-row xl:flex-1 gap-3">
            <div
              className="bg-[#fdfdfd] flex items-center justify-between gap-5 mt-5 lg:mt-3 lg:flex-col shadow-md py-3 px-5 rounded-2xl xl:w-[100px] xl:h-[180px]"
            >
              <div>
                <img className="h-[50px] w-[50px]" src={drops} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="font-bold">Humidity</h2>
                <h2 className="text-gray-500 text-sm">{humidityMsg}</h2>
              </div>
              <div className="lg:flex">
                <span className="text-[20px] font-bold">
                  {weatherData.humidity}
                </span>
                <span className="text-[16px] font-bold">%</span>
              </div>
            </div>

            <div
              className="bg-[#fdfdfd] flex items-center justify-between gap-3 mt-5 lg:mt-3 lg:flex-col shadow-md py-3 px-5 rounded-2xl xl:w-[100px] xl:h-[180px]"
            >
              <div>
                <img className="h-[5 0px] w-[50px]" src={logo} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="font-bold">Wind</h2>
                <h2 className="text-gray-500 text-sm text-center">{windMsg}</h2>
              </div>
              <div className="lg:flex">
                <span className="text-[20px] font-bold">
                  {weatherData.wind}
                </span>
                <span className="text-[16px] font-bold">mph</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrWeatherHighlight;
