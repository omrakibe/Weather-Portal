import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Pune",
    feels_like: 19.24,
    humidity: 40,
    temp: 20.13,
    tempMax: 20.13,
    tempMin: 20.13,
    weather: "few clouds",
  });

  let updateWeather = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <>
      <div>
        <h1>Weather App</h1>
        <br />
        <SearchBox updateInfo={updateWeather} />
        <br />
        <br />
        <InfoBox info={weatherInfo} />
      </div>
    </>
  );
}

export default WeatherApp;
