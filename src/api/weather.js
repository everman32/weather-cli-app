import { fetch } from "undici";
import { printError } from "../services/printer.js";

const getWeatherByCoordinates = async (lat, lon, appid, units) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?${new URLSearchParams({
        lat,
        lon,
        appid,
        units,
      })}`
    );
    return await response.json();
  } catch (error) {
    printError(error.message);
    return 0;
  }
};

export default getWeatherByCoordinates;
