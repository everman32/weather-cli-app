#!/usr/bin/env node

import { printError, printSuccess, printWeather } from "./services/printer.js";
import { readValueFromFile, writeObjectToFile } from "./services/config.js";
import getCoordinatesByCity from "./api/geocoder.js";
import getOptions from "./services/options.js";
import getWeatherByCoordinates from "./api/weather.js";

const setConfig = async (object) => {
  try {
    if ((await writeObjectToFile(object)) === 0) {
      printSuccess(`${Object.keys(object)[0]} saved`);
    }
  } catch (error) {
    printError(error.message);
  }
};

const getConfig = async (object) => {
  try {
    const key = Object.keys(object)[0];
    return await readValueFromFile(key);
  } catch (error) {
    printError(error.message);
    return 0;
  }
};

const resolveConfig = async (object) => {
  const key = Object.keys(object)[0];
  let value = object[key];

  if (value) {
    await setConfig(object);
  } else {
    value = await getConfig(object);

    if (typeof value === "undefined") {
      printError(`${key} is not defined`);
    }
  }
  return value;
};

const getForcast = async (appid, city, units) => {
  try {
    const data = await getCoordinatesByCity(city, appid);
    const weather = await getWeatherByCoordinates(
      data[0].lat,
      data[0].lon,
      appid,
      units
    );

    const descriptions = {
      temp: units === "metric" ? "°C" : "°F",
      speed: units === "metric" ? "m/s" : "m/h",
      percent: "%",
    };

    printWeather(weather, descriptions);
  } catch (error) {
    printError(error.message);
  }
};

const initApp = async () => {
  let { appid, city, units } = getOptions();

  appid = await resolveConfig({ appid });
  city = await resolveConfig({ city });
  units = await resolveConfig({ units });

  if (appid && city) {
    getForcast(appid, city, units);
  }

  return 0;
};

await initApp();
