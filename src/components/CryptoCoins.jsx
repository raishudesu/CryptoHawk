import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { BiLoaderCircle } from "react-icons/bi";
import CoinsData from "../assets/data.json";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CryptoCoins = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const coinGeckoUrl =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false&locale=en";

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(coinGeckoUrl);
        setData(response.data);
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      if (error.response && error.response.status === 429) {
        setLoading(false); // Set loading to false if rate limit exceeded
      } else {
        console.log(error);
      }
    }
  }, [coinGeckoUrl]);

  const noData = () => {
    return (
      <div className="w-full max-h-fit flex justify-center items-center gap-2">
        <div className="text-xl font-semibold">Loading Data... Please wait</div>
        <BiLoaderCircle size={30} className="animate-spin" />
      </div>
    );
  };
  return (
    <div id="market" className="w-full max-h-fit p-4 overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-center text-3xl font-semibold">Current Market</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {loading
            ? noData()
            : data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-800 p-6 rounded-xl hover:scale-[1.05] transition ease-in-out shadow-md shadow-violet-500 hover:shadow-[#FFD700] hover:shadow-lg"
                  >
                    <div className="flex flex-col justify-center items-center gap-2">
                      <div className="max-w-[60px]">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="flex flex-col justify-center items-center gap-2">
                        <h1 className="text-3xl font-bold">{item.name}</h1>
                        <p className="text-xl font-semibold">
                          ${item.current_price}
                        </p>
                        <div>
                          {item.price_change_percentage_24h > 0 ? (
                            <span className="text-green-500 flex justify-center items-center gap-1">
                              <FiArrowUp size={20} />
                              <p>
                                {item.price_change_percentage_24h.toFixed(2)}
                              </p>
                            </span>
                          ) : (
                            <span className="text-red-500 flex justify-center items-center gap-1">
                              <FiArrowDown size={20} />
                              <p>
                                {item.price_change_percentage_24h.toFixed(2)}
                              </p>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
        <h1 className="text-[12px]">Powered by CoinGecko</h1>
      </div>
    </div>
  );
};

export default CryptoCoins;
