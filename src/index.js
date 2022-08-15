#!/usr/bin/env node

import { printError, printSuccess, printWeather } from "./services/printer.js";
import {
  readValueFromFile,
  writeObjectToFile,
} from "./services/weather/config-io.js";
import getCoordinatesByCity from "./services/weather/geocoding-api.js";
import getOptions from "./services/options.js";
import getWeatherByCoordinates from "./services/weather/weather-api.js";

const setConfig = async (object) => {
  try {
    if ((await writeObjectToFile(object)) === 0) {
      printSuccess(`${Object.keys(object)[0]} saved`);
    }
  } catch (e) {
    printError(e.message);
  }
};

const getConfig = async (object) => {
  try {
    const key = Object.keys(object)[0];
    const value = await readValueFromFile(key);
    return value;
  } catch (e) {
    printError(e.message);
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
    const { lat, lon } = await getCoordinatesByCity(city, appid);
    const weather = await getWeatherByCoordinates(lat, lon, appid, units);

    const descriptions = {
      temp: units === "metric" ? "°C" : "°F",
      speed: units === "metric" ? "m/s" : "m/h",
      percent: "%",
    };

    printWeather(weather, descriptions);
  } catch (e) {
    printError(e.message);
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

initApp();
