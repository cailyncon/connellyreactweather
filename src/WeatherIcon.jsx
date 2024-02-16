import React from "react";

export default function WeatherIcon(props) {
  return (
    <div className="WeatherIcon">
      <img src={props.iconURL} alt={props.icon} />
    </div>
  );
}
