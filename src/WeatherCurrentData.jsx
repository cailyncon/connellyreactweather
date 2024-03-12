import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherCurrentData(props) {
  return (
    <div>
      <div className="current-weather">
        <div className="current-city">{props.data.city}</div>
        <FormatDate date={props.data.date} />
        <div className="current-temperature">
          <WeatherTemperature fahrenheit={props.data.temperature} />
          <WeatherIcon iconURL={props.data.iconURL} />
        </div>
        <div className="current-details">
          <div>{props.data.description}</div>
          <div>Humidity: {props.data.humidity}%</div>
          <div>Wind: {props.data.wind} mph</div>
        </div>
      </div>
    </div>
  );
}
