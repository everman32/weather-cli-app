import chalk from "chalk";
import getIcon from "../icons.js";

const printSuccess = (successMessage) => {
  console.log(`${chalk.bgGreen(" SUCCESS ")} ${successMessage}`);
};

const printError = (errorMessage) => {
  console.error(`${chalk.bgRed(" ERROR ")} ${errorMessage}`);
};

const printWeather = (weather, descriptions) => {
  console.log(
    `${chalk.bgMagenta(" WEATHER ")} Weather in ${weather.name}
  ${getIcon(weather.weather[0].icon)}  ${weather.weather[0].description}
  Temperature: ${weather.main.temp}${descriptions.temp} (Feels like ${
    weather.main.feels_like
  }${descriptions.temp})
  Humidity: ${weather.main.humidity}${descriptions.percent}
  Wind speed: ${weather.wind.speed}${descriptions.speed}`
  );
};

export { printSuccess, printError, printWeather };
