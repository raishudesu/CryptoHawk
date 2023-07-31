import axios from "axios";

const CoinsRequest = () => {
  const getCoins = async () => {
    try {
      const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en";

      const res = await axios.get(url);

      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  return getCoins();
};

export default CoinsRequest;
