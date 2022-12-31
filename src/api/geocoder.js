import { printError } from "../services/printer.js";

const getCoordinatesByCity = async (city, appid) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?${new URLSearchParams({
        q: city,
        appid,
      })}`
    );
    return await response.json();
  } catch (error) {
    printError(error.message);
    return 0;
  }
};

export default getCoordinatesByCity;
