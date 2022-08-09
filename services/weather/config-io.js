import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";

const filePath = join(homedir(), "weather-config.json");

const isFileExist = async () => {
  try {
    await promises.stat(filePath);

    return true;
  } catch (e) {
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
  } catch (e) {
    return 1;
  }
};

const readValueFromFile = async (key) => {
  try {
    const data = await readDataFromFile();

    return data[key];
  } catch (e) {
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
  } catch (e) {
    return 2;
  }
};

export { writeObjectToFile, readValueFromFile };
