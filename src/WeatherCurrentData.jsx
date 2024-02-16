import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherCurrentData(props) {
  return (
    <div>
      <div className="current-weather">
        <h1>{props.data.city}</h1>
        <FormatDate date={props.data.date} />
        <div className="current-temperature">
          <div className="icon-img" id="icon"></div>
          <span className="current-temperature-value">
            <WeatherTemperature celsius={props.data.temperature} />
            <WeatherIcon iconURL={props.data.iconURL} />
            <div></div>
          </span>
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
