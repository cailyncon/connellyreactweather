import React from "react";
import "./App.css";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  return (
    <div className="forecastslice">
      <div className="weather-forecast-date">
        <span>{day()}</span>{" "}
      </div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
        className="forecast-icon"
      />
      <div className="forecast-temps">
        <span className="forecast-temp-max">{maxTemperature()}</span>
        <span className="forecast-temp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
