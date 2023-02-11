# weather-cli-app

![GitHub release (latest by date)](https://img.shields.io/github/v/release/everman32/weather-cli-app) [![GitHub stars](https://img.shields.io/github/stars/everman32/weather-cli-app)](https://github.com/everman32/weather-cli-app/stargazers) [![GitHub forks](https://img.shields.io/github/forks/everman32/weather-cli-app)](https://github.com/everman32/weather-cli-app/network) [![GitHub issues](https://img.shields.io/github/issues/everman32/weather-cli-app)](https://github.com/everman32/weather-cli-app/issues) [![GitHub license](https://img.shields.io/github/license/everman32/weather-cli-app)](https://github.com/everman32/weather-cli-app)

![logo](https://i.ibb.co/BCLv4zw/logo.png)

Console application providing city weather

## Installation

weather-cli-app get weather data from [OpenWeather](https://openweathermap.org), therefore, to access the service, you need to [Sign up](https://home.openweathermap.org/users/sign_up) or [Sign in](https://home.openweathermap.org/users/sign_in) if your account already exists.
You need to generate a new **API key (appid)** in the **"My API keys"** tab in your **profile**.

Use `npm` as a package manager. Install dependencies from `package.json`:
```bash
npm i
```

## Usage

### Get a list of available flags:
```bash
npm start -- -h
```
*As you can see, in order to pass the flag to the `weather-cli-app`, and not to `npm`, you need to add `--`.*

### Available flags:
| Short flag | Long flag | Argument | Description |
| :---: | :--: | :------: | :---------- |
|-c  | --city | string | specify the city for which you want to know the weather |
|-a  | --appid | string | determine the appid used to access the weather API |
|-u  | --units | string | define units of measurement (choices: "metric", "imperial", default: "metric") |
|-h  | --help | None | display help for command |

### Configuration file
The configuration data (city, units of measurement and appid) is stored in the `weather-config.json` configuration file located in the user's root directory depending on the operating system. For example, in **Windows** configuration file is located in the **Users/YourUserName** directory.

*The configuration file will be automatically created on the first start of the `weather-cli-app` if any flag with a value is passed.*

### Usage examples
As mentioned earlier, to work with the `weather-cli-app`, you need to use the flag to set the **appid**:
```bash
npm start -- -a your_appid
```
*You can also specify other data, such as **city** or **units of measurement**, in the same command call or in a separate call*:
```bash
npm start -- -a your_appid -c your_city
```
For example, for the previously given **appiid**, the resulting output for the city of **Minsk** will be as follows:
```bash
npm start -- -c Minsk
```
Below is the implementation of the above scenario:

![example](https://i.ibb.co/sgb5VYn/example.png)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)