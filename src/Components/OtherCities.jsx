import { useState, useEffect } from 'react'
import rain from "../assets/rain.png";
import partlysunny from "../assets/partly-sunny.png";
import clear from "../assets/clear.png";
import cloud from "../assets/cloud.png";
import drizzle from "../assets/drizzle.png";
import snow from "../assets/snow.png";
import brokenCloud from "../assets/broken-black-cloud.png";
import { allIcons } from '../Data/Data';
import broken_Cloud from "../assets/broken-clouds-icon.png";
import overcast from "../assets/overcast.png";



const OtherCities = () => {
  const [otherCityWeather, setOtherCityWeather] = useState ([]);
  const [loading, setLoading] = useState(false);

    // const allIcons = {
    //   "01d": clear,
    //   "01n": clear,
    //   "02d": partlysunny,
    //   "02n": partlysunny,
    //   "03d": cloud,
    //   "03n": cloud,
    //   "04d":  brokenCloud,
    //   "04n": brokenCloud,
    //   "09d": drizzle,
    //   "09n": drizzle,
    //   "10d": rain,
    //   "10n": rain,
    //   "13d": snow,
    //   "13n": snow,
    // };

  const cityList = ["Abuja", "Enugu", "Calabar", "Jos", "Abia", "Umuahia", "Adamawa", "Yola",  "Uyo", "Anambra", "Awka", "Bauchi",  "Bayelsa", "Yenagoa", "Benue", "Makurdi", "Borno", "Maiduguri",
    "Delta", "Asaba", "Ebonyi", "Abakaliki", "Edo", "Benin", "Ekiti",  "Enugu", "Gombe", "Imo", "Owerri",
  "Jigawa", "Dutse", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Lokoja", "Kwara", "Ilorin", "Lagos", "Ikeja",
  "Nasarawa", "Lafia", "Niger", "Minna", "Ogun", "Abeokuta", "Ondo", "Akure", "Osun", "Osogbo", "Oyo", "Ibadan", "Plateau", "Jos", "Rivers", 
  "Sokoto", "Taraba", "Jalingo", "Yobe", "Damaturu", "Zamfara", "Gusau",]; 
    // "Port Harcourt", "Akwa Ibom", "Cross River", "Ado Ekiti",
  // Utility to shuffle and pick N random cities
  function getRandomCities(list, count = 4) {
    const shuffled = [...list].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

const fetchRandomCities = async () => {
    setLoading(true);
    const randomCities = getRandomCities(cityList, 4);
    const results = await Promise.all(
      randomCities.map(async (city) => {
        try {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},ng&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
          const response = await fetch(url);
          const data = await response.json();
          const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
          // const icon = allIcons[data.weather[0].icon] || clear;
          return {
            city: data.name,
            temp: Math.floor(data.main.temp),
            icon: iconUrl,
            description: data.weather[0].description,
          };
        } catch (error) {
          return null;
        }
      })
    );
    setOtherCityWeather(results.filter(Boolean));
    setLoading(false);
  };

  useEffect(() => {
    fetchRandomCities();
  }, []);

  return (
    <div>
      {loading && <div className="text-center">Loading...</div>}
      <div className="flex flex-col gap-4">
        {otherCityWeather.map((city, idx) => (
          <div key={idx} className="flex items-center justify-center gap-4 bg-[#fdfdfd] shadow-md rounded-2xl px-4 md:flex-col md:py-1 lg:flex-row lg:px-4 lg:py-2">
            <img src={city.icon}  alt={city.city} className="w-20 h-20" />
            <div className='flex flex-col justify-center items-center' >
              <div className="font-bold">{city.city}</div>
              <div className="text-gray-500 text-sm capitalize text-center">{city.description}</div>
            </div>
            <div className="text-xl font-bold">{city.temp}°C</div>
          </div>
        ))}
      <div className="flex justify-center items-center mb-5">
        <button
          className="bg-blue-700 px-7 py-2 rounded-2xl text-white"
          onClick={fetchRandomCities}
        >
          Refresh
        </button>
      </div>
      </div>
    </div>
  )
}

export default OtherCities