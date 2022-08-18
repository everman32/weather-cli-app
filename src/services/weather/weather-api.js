import axios from "axios";

const getWeatherByCoordinates = async (lat, lon, appid, units) => {
  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        lat,
        lon,
        appid,
        units,
      },
    },
  );
  return data;
};

export default getWeatherByCoordinates;
