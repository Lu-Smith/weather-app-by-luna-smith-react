import React from "react";
import CurrentDate from "./CurrentDate";
import Time from "./Time";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      Hello, today in {props.currentData.city} weather is:
      <ul>
        <li>
          <Time date={props.currentData.date} />
        </li>
        <li>{Math.round(props.currentData.temperature)}°C</li>
        <li>{props.currentData.descriptions}</li>
        <li>{Math.round(props.currentData.wind)}km/h</li>
        <li>{props.currentData.humidity}%</li>
      </ul>
      <div>
        <CurrentDate date={props.currentData.date} />
      </div>
    </div>
  );
}
