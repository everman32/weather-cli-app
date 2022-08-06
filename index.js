#!/usr/bin/env node

import getOptions from "./services/options.js";

const initApp = () => {
  const options = getOptions();
  console.log(options);
};

initApp();
