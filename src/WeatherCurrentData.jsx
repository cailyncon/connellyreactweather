import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import FormatDate from "./FormatDate";

export default function WeatherCurrentData(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <FormatDate date={props.data.date} />
      <div class="current-weather">
        <div class="current-temperature">
          <div class="icon-img" id="icon"></div>
          <span class="current-temperature-value">
            <WeatherTemperature celsius={props.data.temperature} />
          </span>
          <span class="current-temperature-unit">°F </span>
        </div>
        <div class="current-details">
          {props.data.description}
          <div>Humidity: {props.data.humidity}%</div>
          <div>Wind: {props.data.wind}mph</div>
        </div>
      </div>
    </div>
  );
}
