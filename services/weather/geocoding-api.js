import axios from "axios";

const getCoordinatesByCity = async (city, appid) => {
  const { data } = await axios.get(
    "http://api.openweathermap.org/geo/1.0/direct",
    {
      params: {
        q: city,
        appid,
      },
    }
  );
  return { lat: data[0].lat, lon: data[0].lon };
};

export default getCoordinatesByCity;
