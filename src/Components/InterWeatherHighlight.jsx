import rain from "../assets/rain.png";
import logo from "../assets/sun-cloudy.png";
import compass from "../assets/compass.png";
import drops from "../assets/drops.png";
import ultraviolet from "../assets/ultraviolet.png";


const InterWeatherHighlight = ({weatherData}) => {

  let tempMsg = "";
  if (weatherData.temp >= 35) tempMsg = "Very Hot";
  else if (weatherData.temp >= 28) tempMsg = "Hot";
  else if (weatherData.temp >= 20) tempMsg = "Normal";
  else if (weatherData.temp >= 15) tempMsg = "Cool";
  else tempMsg = "Cold";

  let humidityMsg = "";
  if (weatherData.humidity >= 80) humidityMsg = "";
  else if (weatherData.humidity >= 60) humidityMsg = "";
  else humidityMsg = "";

  let windMsg = "";
  if (weatherData.wind >= 30) windMsg = "";
  else if (weatherData.wind >= 15) windMsg = "";
  else windMsg = "";


  return (
    <div>
      <div>
        <h1 className="text-xl font-bold pt-5 lg:pt-0">
          Weather Highlight Interpreted
        </h1>
        <div className="flex flex-col gap-3 lg:flex-row">
          {/* two stack 1*/}
          <div className="mt-5 lg:mt-0">
            <div
              style={{ minWidth: "100px" }}
              className="bg-[#fdfdfd] flex items-center justify-between gap-3 shadow-md py-3 px-5 rounded-2xl"
            >
              <div>
                <img
                  className="h-[5 0px] w-[50px]"
                  src={compass}
                  alt=""
                />
              </div>
              <div>
                <h2 className="font-bold">Weather</h2>
                <h2 className="text-gray-500">Normal</h2>
              </div>
              <div>
                <span className="text-[24px] flex font-bold relative">
                  28 <sup className="absolute top-3 -right-4 ">o</sup>
                </span>
              </div>
            </div>

            <div
              style={{ minWidth: "100px" }}
              className="bg-[#fdfdfd] flex items-center justify-between gap-3 mt-5 lg:mt-3 shadow-md py-3 px-5 rounded-2xl"
            >
              <div>
                <img className="h-[5 0px] w-[50px]" src={logo} alt="" />
              </div>
              <div>
                <h2 className="font-bold">Cloud</h2>
                <h2 className="text-gray-500">Heave</h2>
              </div>
              <div>
                <span className="text-[24px] flex font-bold relative">
                  28 <sup className="absolute top-3 -right-4 ">o</sup>
                </span>
              </div>
            </div>
          </div>
          {/* two stack 2*/}
          <div className="mt-5 lg:mt-0">
            <div
              style={{ minWidth: "100px" }}
              className="bg-[#fdfdfd] flex items-center justify-between gap-3 shadow-md py-3 px-5 rounded-2xl"
            >
              <div>
                <img className="h-[5 0px] w-[50px]" src={rain} alt="" />
              </div>
              <div>
                <h2 className="font-bold">Rain</h2>
                <h2 className="text-gray-500">Normal</h2>
              </div>
              <div>
                <span className="text-[24px] flex font-bold relative">
                  28 <sup className="absolute top-3 -right-4 ">o</sup>
                </span>
              </div>
            </div>

            <div
              style={{ minWidth: "100px" }}
              className="bg-[#fdfdfd] flex items-center justify-between gap-3 mt-5 lg:mt-3 shadow-md py-3 px-5 rounded-2xl"
            >
              <div>
                <img
                  className="h-[5 0px] w-[50px]"
                  src={drops}
                  alt=""
                />
              </div>
              <div>
                <h2 className="font-bold">Humidity</h2>
                <h2 className="text-gray-500">Normal</h2>
              </div>
              <div>
                <span className="text-[24px] flex font-bold relative">
                  28 <sup className="absolute top-3 -right-4 ">o</sup>
                </span>
              </div>
            </div>
          </div>
          {/* two stack 3*/}
          <div className="mt-5 lg:mt-0">
            <div
              style={{ minWidth: "100px" }}
              className="bg-[#fdfdfd] flex items-center justify-between gap-3  shadow-md py-3 px-5 rounded-2xl"
            >
              <div>
                <img
                  className="h-[5 0px] w-[50px]"
                  src={ultraviolet}
                  alt=""
                />
              </div>
              <div>
                <h2 className="font-bold">Ultraviolet</h2>
                <h2 className="text-gray-500">Normal</h2>
              </div>
              <div>
                <span className="text-[24px] flex font-bold relative">
                  28 <sup className="absolute top-3 -right-4 ">o</sup>
                </span>
              </div>
            </div>

            <div
              style={{ minWidth: "100px" }}
              className="bg-[#fdfdfd] flex items-center justify-between gap-3 mt-5 lg:mt-3 shadow-md py-3 px-5 rounded-2xl"
            >
              <div>
                <img className="h-[5 0px] w-[50px]" src={logo} alt="" />
              </div>
              <div>
                <h2 className="font-bold">Cloudy</h2>
                <h2 className="text-gray-500">Normal</h2>
              </div>
              <div>
                <span className="text-[24px] flex font-bold relative">
                  28 <sup className="absolute top-3 -right-4 ">o</sup>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InterWeatherHighlight