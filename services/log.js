import chalk from "chalk";

const printSuccess = (successMessage) => {
  console.log(`${chalk.bgGreen(" SUCCESS ")} ${successMessage}`);
};

const printError = (errorMessage) => {
  console.error(`${chalk.bgRed(" ERROR ")} ${errorMessage}`);
};

export { printSuccess, printError };
