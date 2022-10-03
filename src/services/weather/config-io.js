import { homedir } from "node:os";
import { join } from "node:path";
import { promises } from "node:fs";
import { printError } from "../printer.js";

const filePath = join(homedir(), "weather-config.json");

const isFileExist = async () => {
  try {
    await promises.stat(filePath);
    return true;
  } catch (error) {
    printError(error.message);
    return false;
  }
};

const readDataFromFile = async () => {
  try {
    let data = {};

    if (await isFileExist()) {
      const file = await promises.readFile(filePath);
      data = JSON.parse(file);
    }

    return data;
  } catch (error) {
    printError(error.message);
    return 1;
  }
};

const readValueFromFile = async (key) => {
  try {
    const data = await readDataFromFile();
    return data[key];
  } catch (error) {
    printError(error.message);
    return 1;
  }
};

const writeObjectToFile = async (object) => {
  try {
    const data = await readDataFromFile();
    const key = Object.keys(object)[0];

    if (data[key] !== object[key]) {
      data[key] = object[key];
      await promises.writeFile(filePath, JSON.stringify(data));

      return 0;
    }
    return 1;
  } catch (error) {
    printError(error.message);
    return 2;
  }
};

export { writeObjectToFile, readValueFromFile };
