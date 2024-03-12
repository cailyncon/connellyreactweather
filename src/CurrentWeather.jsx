import React, { useState } from "react";
import axios from "axios";
import WeatherCurrentData from "./WeatherCurrentData";
import WeatherForecast from "./Forecast";
import "./App.css";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      coordinates: response.data.coordinates,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      icon: response.data.condition.icon,
      iconURL: response.data.condition.icon_url,
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
          <form onSubmit={handleSubmit} className="search-bar">
            <input
              type="search"
              placeholder="Enter a city.."
              required
              className="search-input"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
        </div>
        <WeatherCurrentData data={weatherData} />
        <WeatherForecast
          coordinates={weatherData.coordinates}
          city={weatherData.city}
        />
      </div>
    );
  } else {
    search();
    return "Your weather is loading...";
  }
}
