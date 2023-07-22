import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataLoader from "./DataLoader";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import coinsRequest from "./CoinsRequest";

const CryptoCoins = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await coinsRequest();
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const goToMoreStats = () => {
    navigate("/morestats");
  };
  return (
    <div id="market" className="w-full max-h-fit p-4 overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-center text-3xl font-semibold">Current Market</h1>
        <div
          onLoad={() => setLoading(false)}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 min-h-screen max-h-fit"
        >
          {loading && <DataLoader />}
          {data.slice(0, 12).map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center bg-gray-800 p-6 rounded-xl hover:scale-[1.05] transition ease-in-out shadow-md shadow-violet-500 hover:shadow-[#FFD700] hover:shadow-lg"
              >
                <div className="flex flex-col justify-center items-center gap-2">
                  <div className="max-w-[60px]">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-2 text-center">
                    <h1 className="text-3xl font-bold">{item.name}</h1>
                    <p className="text-xl font-semibold">
                      ${item.current_price.toFixed(2)}
                    </p>
                    <div>
                      {item.price_change_percentage_24h > 0 ? (
                        <span className="text-green-500 flex justify-center items-center gap-1">
                          <FiArrowUp size={20} />
                          <p>{item.price_change_percentage_24h.toFixed(2)}</p>
                        </span>
                      ) : (
                        <span className="text-red-500 flex justify-center items-center gap-1">
                          <FiArrowDown size={20} />
                          <p>{item.price_change_percentage_24h.toFixed(2)}</p>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <a
          href="https://www.coingecko.com"
          target="_blank"
          className="text-[12px] hover:underline"
        >
          Powered by CoinGecko
        </a>
        <button
          className="bg-[#FFD700] text-[#242424] cursor-pointer font-semibold py-3 px-6 rounded-full hover:bg-violet-500 hover:text-gray-100 transition ease-in-out"
          onClick={() => goToMoreStats()}
        >
          More Stats
        </button>
      </div>
    </div>
  );
};

export default CryptoCoins;
