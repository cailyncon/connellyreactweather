import React, { useState } from "react";
import axios from "axios";
import WeatherCurrentData from "./WeatherCurrentData";
import Forecast from "./Forecast";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "b84b065do096ab8b5a39fb9t38e99a64";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city.."
              required
              className="search-input"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" class="search-button" />
          </form>
        </div>
        <WeatherCurrentData data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Your weather is loading...";
  }
}
