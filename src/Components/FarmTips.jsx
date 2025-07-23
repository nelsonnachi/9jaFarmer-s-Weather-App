import { useEffect, useState } from "react";
import rain from "../assets/rain.png";


const FarmTips = () => {
  const [tips, setTips] = useState([]);

  const farmingTips = [
  "Plant early in the rainy season to take full advantage of natural water.",
  "Use compost or animal manure to make your soil rich and healthy.",
  "Rotate your crops each season to avoid pests and make soil stronger.",
  "Remove weeds early so they don't compete with crops for nutrients.",
  "Store harvested crops in a dry place to avoid mold and spoilage.",
  "Check leaves regularly for signs of pests or sickness.",
  "Use clean water when watering crops to avoid disease.",
  "Group crops with similar water needs together.",
  "Sharpen your tools often—they work better and save time.",
  "Avoid burning old crops on the land—it can damage the soil.",
  "Use ashes from cooking fires to keep bugs away from crops.",
  "Plant trees or tall crops at the edge of your farm to block strong wind.",
  "Collect rainwater in barrels to use during dry days.",
  "Don't plant the same crop in the same spot every season—it weakens the soil.",
  "Let animals like goats or chickens rest in old crop fields to add natural fertilizer.",
  "When planting, give space between crops so they don’t fight for food and air.",
  "Dig small channels to guide rainwater to where crops need it most.",
  "Dry seeds well before storing, so they don’t spoil or grow fungus.",
  "Use banana leaves or old sacks to cover seedlings from hot sun or cold nights.",
  "Don’t throw plastic or chemicals on the land—it can harm the soil and crops."
  ];

  const shuffleArray = (arr) => {
    const tips = [...arr];
    for (let i = tips.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [tips[i], tips[rand]] = [tips[rand], tips[i]];
    }
    return tips.slice(0, 3);
  };

  useEffect(() => {
    const shuffled = shuffleArray(farmingTips);
    setTips(shuffled);
  }, []);

 return (
  <div className="pt-4 md:pt-2">
    <h5 className="text-gray-500">Weekly</h5>
    <h1 className=" text-xl font-bold">Smart Tips</h1>

    <div className="flex flex-col gap-5 pt-5 md:flex-row">
      {tips.map((tip, index) => (
        <div key={index} className="bg-[#fdfdfd] flex flex-1 justify-center rounded-2xl shadow-md py-5 px-5">
          <div>
            <img src={rain} alt="Rainfall icon" />
          </div>
          <div>
            <h1 className="text-gray-300">Tip {index + 1}</h1>
            <p>{tip}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

}

export default FarmTips