#!/usr/bin/env node

import getOptions from "./option-util.js";

const initApp = () => {
  const options = getOptions();
  console.log(options);
};

initApp();
