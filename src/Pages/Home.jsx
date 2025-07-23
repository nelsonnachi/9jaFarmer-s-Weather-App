import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import OtherCities from "../Components/OtherCities";
import { nigeriaPlaces } from "../Data/Data";
import { allIcons } from "../Data/Data";
import Modal from "../Components/Modal";
import CurrrentForecast from "../Components/CurrrentForecast";
import InterpreteForecast from "../Components/InterpreteForecast";
import AgroNews from "../Components/AgroNews";
import clear from "../assets/clear.png";
import FarmTips from "../Components/FarmTips";
import InterWeatherHighlight from "../Components/InterWeatherHighlight";
import CurrWeatherHighlight from "../Components/CurrWeatherHighlight";

const Home = () => {
  const inputRef = useRef();
  const [activeTab, setActiveTab] = useState("current");
  const [weatherData, setWeatherData] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  // modal for alert messages
  const handleCloseModal = () => {
    setShowModal(false);
    setModalMessage("");
  };

  // API function for weather
  const search = async (city) => {
    if (city === "") {
      setModalMessage("Please enter a city name in Nigeria");
      setShowModal(true);
      return;
    }

    // 💡 Normalize input and validate
    const formattedCity = city.trim().toLowerCase();
    const isNigerianPlace = nigeriaPlaces.some((place) =>
      place.toLowerCase().includes(formattedCity)
    );

    if (!isNigerianPlace) {
      setModalMessage(
        "City not found in Nigeria. Please enter a valid Nigerian location."
      );
      setShowModal(true);
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},ng&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const icon = allIcons[data.weather[0].icon] || clear;

      setWeatherData({
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temp: Math.floor(data.main.temp),
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        wind: data.wind.speed,
        description: data.weather[0].description,
        icon: icon,
        city: data.name,
        country: data.sys.country,
        date: new Date(data.dt * 1000).toLocaleDateString(),
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
        timezone: data.timezone,
        visibility: data.visibility,
        clouds: data.clouds.all,
        weather: data.weather[0].main,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    search("Kano");
  }, []);

  return (
    <section className="mt-28">
      <div>
        <h1 className="text-[26px] text-blue-700 font-bold text-center mt-5 md:text-3xl md:px-20">
          Welcome to 9jafarmers Weather App
        </h1>
        <p className="text-center mt-4 md:text-[18px]">
          Get the latest weather updates and news for your city and around the
          world.
        </p>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              search(inputRef.current.value);
            }}
            className="flex justify-center mt-8"
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for a city..."
              className="p-2 border border-gray-300 rounded-tl-full rounded-bl-full w-full max-w-[200px] md:max-w-[300px] outline-none"
            />
            <button
              type="submit"
              className=" p-2 px-5 rounded-tr-full rounded-br-full bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>

          <div className="p-4">
            {showModal && (
              <Modal message={modalMessage} onClose={handleCloseModal} />
            )}
          </div>
        </div>

        {/* Toggling Component to display either the current weather forcast or to interprete the current weather forecast on a new component */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={() => setActiveTab("current")}
            className={`px-4 py-2 rounded-md ${
              activeTab === "current"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Current forcast
          </button>
          <button
            onClick={() => setActiveTab("interprete me")}
            className={`px-4 py-2 rounded-md ${
              activeTab === "interprete me"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Interprete Forecast
          </button>
        </div>
      </div>

      <div className="pt-5 grid grid-cols-1 auto-rows-[100px]  gap-5 md:grid-cols-3">
        {/* Current/Interprete */}
        <div
          className={`box1 p-[20px] rounded-2xl bg-[#fdfdfd] shadow-md row-span-4 ${
            activeTab === "interprete me"
              ? "row-span-5 lg:row-span-3 justify-start"
              : "row-span-4"
          } md:col-span-2  lg:row-span-2 flex justify-center flex-col md:flex-row`}
        >
          {activeTab === "current" && weatherData ? (
            <>
              <CurrrentForecast weatherData={weatherData} />
            </>
          ) : null}
          {activeTab === "interprete me" && weatherData ? (
            <>
              <InterpreteForecast weatherData={weatherData} />
            </>
          ) : null}
        </div>

        {/* Other Cities */}
        <div className="box2 p-[20px] bg-[#fdfdfd] shadow-md rounded-2xl md:block row-span-4 md:row-span-8 lg:row-span-5 ">
          <div>
            <h1 className="text-xl font-bold">Other Cities</h1>
            <OtherCities />
          </div>
        </div>

        {/* Weather Highlight */}
        <div className={`box3 p-[20px] rounded-2xl bg-[#fdfdfd] shadow-md ${
            activeTab === "current"
              ? "lg:row-span-4"
              : ""
          } md:col-span-2 row-span-6 lg:row-span-2 xl:row-span-3 xl:pt-10`}>
            <CurrWeatherHighlight weatherData={weatherData}/>
        </div>

        {/* Weekly Farm tips  */}
        <div className="box6 p-[20px] bg-white shadow-md rounded-2xl row-span-5 md:col-span-3 md:row-span-3">
          <FarmTips />
        </div>
      </div>

      {/* Agro News */}
      <AgroNews />
    </section>
  );
};

export default Home;
