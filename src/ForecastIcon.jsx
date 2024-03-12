import React from "react";

export default function ForecastIcon(props) {
  return (
    <div className="ForecastIcon">
      <img src={props.iconURL} alt={props.icon} />
    </div>
  );
}
