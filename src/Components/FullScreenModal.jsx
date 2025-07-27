import { useEffect, useState } from 'react';
import { BadgeQuestionMark } from 'lucide-react';

const FullScreenModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCloseBtn, setShowCloseBtn] = useState(false);
  const [currentMeaning, setCurrentMeaning] = useState(null);

  const weatherMeanings = [
  {
    temperature: "Temperature means how hot or cold the air is. It affects how crops grow.",
    humidity: "Humidity is the amount of water in the air. Too much can cause plant diseases.",
    wind: "Wind is moving air. Strong wind can damage crops or spread seeds."
  },
  {
    temperature: "Temperature tells you the heat level of the day. Crops grow better in certain temperatures.",
    humidity: "Humidity shows how wet the air is. It helps farmers know if their crops might dry out.",
    wind: "Wind helps cool the air but can dry out the land if it’s too strong."
  },
  {
    temperature: "Temperature is the measure of warmth outside. Plants need good temperatures to grow.",
    humidity: "Humidity is how much water is floating in the air. It's important for healthy plant leaves.",
    wind: "Wind moves air across the farm. Too much wind can break plants or dry the soil."
  },
  {
    temperature: "Temperature means the level of heat. Cool days and warm days affect crop growth.",
    humidity: "Humidity means moisture in the air. Crops like a balance — not too dry, not too wet.",
    wind: "Wind is air blowing around. It can carry water or dust and affect the weather."
  }
];


  useEffect(() => {
    
    const modalTimer = setTimeout(() => {
      setShowModal(true); 

      const randomIndex = Math.floor(Math.random() * weatherMeanings.length);
      setCurrentMeaning(weatherMeanings[randomIndex]);

      const buttonTimer = setTimeout(() => {
        setShowCloseBtn(true);
      }, 5000);
      return () => clearTimeout(buttonTimer);
    }, 3000);

    return () => clearTimeout(modalTimer);
  }, []);

  

  return (
    <>
      {showModal && currentMeaning && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-999">
          <div className=" bg-white p-6 flex flex-col items-center justify-center text-center">
            <BadgeQuestionMark size={70} className='text-red-700'/>
            <h2 className="text-2xl font-bold mb-4 uppercase">🌦️ Do you know ?</h2>  
             <div>
                <p><strong >Temperature:</strong> <br /> {currentMeaning.temperature}</p>
                <p><strong>Humidity:</strong> <br /> {currentMeaning.humidity}</p>
                <p><strong>Wind:</strong> <br /> {currentMeaning.wind}</p>
            </div>
            {showCloseBtn && (
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-600 text-white px-6 py-1 mt-3 rounded hover:bg-red-700 transition"
              >
                Close
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FullScreenModal;
