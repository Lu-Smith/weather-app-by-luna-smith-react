import React, { useState } from "react";
import CurrentDate from "./CurrentDate";
import Time from "./Time";
import WeatherIcon from "./WeatherIcon";
import Key from "./Key";

export default function ConvertTemperature(props) {
  const [degree, setDegree] = useState(`celsius`);
  function showFahrenheit(event) {
    event.preventDefault();
    setDegree("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setDegree("celsius");
  }
  if (degree === `celsius`) {
    let temp = `${Math.round(props.celsius)}°C`;
    return (
      <div className="ConventTemperature">
        <span>{temp}</span>
        <button
          type="button"
          className="btn btn-danger"
          onClick={showFahrenheit}
        >
          F
        </button>
        <button type="button" className="btn btn-danger">
          C
        </button>
        <div className="WeatherData">
          <WeatherIcon icon={props.currentData.icons} />
          Hello, today in {props.currentData.city} weather is:
          <ul>
            <li>
              <Time date={props.currentData.date} />
            </li>
            <li>{temp}</li>
            <li>{props.currentData.descriptions}</li>
            <li>{Math.round(props.currentData.wind)}km/h</li>
            <li>{props.currentData.humidity}%</li>
          </ul>
          <div>
            <CurrentDate date={props.currentData.date} />
            <Key />
          </div>
        </div>
      </div>
    );
  } else {
    let fahrenheitConversion = (props.celsius * 9) / 5 + 32;
    let temp = `${Math.round(fahrenheitConversion)}°F`;
    return (
      <div className="ConventTemperature">
        <span>{temp}</span>
        <button type="button" className="btn btn-danger">
          F
        </button>
        <button type="button" className="btn btn-danger" onClick={showCelsius}>
          C
        </button>
        <div className="WeatherData">
          Hello, today in {props.currentData.city} weather is:
          <ul>
            <li>
              <Time date={props.currentData.date} />
            </li>
            <li>{temp}</li>
            <li>{props.currentData.descriptions}</li>
            <li>{Math.round(props.currentData.wind)}km/h</li>
            <li>{props.currentData.humidity}%</li>
          </ul>
          <div>
            <CurrentDate date={props.currentData.date} />
          </div>
        </div>
      </div>
    );
  }
}
