#!/usr/bin/env node

import getOptions from "./services/options.js";
import { printSuccess, printError, printWeather } from "./services/printer.js";
import {
  readValueFromFile,
  writeObjectToFile,
} from "./services/weather/config-io.js";
import getCoordinatesByCity from "./services/weather/geocoding-api.js";
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

    if (value === undefined) {
      printError(`${key} is not defined`);
    }
  }
  return value;
};

const saveToken = async (token) => {
  try {
    await writeKeyValue("token", token);
    printSuccess("Token saved");
  } catch (e) {
    printError(e.message);
  }
};

const initApp = () => {
  const options = getOptions();
  console.log(options);
  if (options.token) {
    return saveToken(options.token);
  }
  return 0;
};

initApp();
