#!/usr/bin/env node

import getOptions from "./services/options.js";
import { printSuccess, printError } from "./services/log.js";
import { writeKeyValue } from "./services/storage.js";

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
