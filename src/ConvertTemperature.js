import React, { useState } from "react";
import CurrentDate from "./CurrentDate";
import Time from "./Time";
import WeatherIcon from "./WeatherIcon";
import Key from "./Key";
import "./ConvertTemperature.css";

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
      <div className="ConvertTemperature">
        <div className="degree-choice">
          <button
            type="button"
            className="degree fahrenheit"
            onClick={showFahrenheit}
          >
            F
          </button>
          <button type="button" className="degree celsius">
            C
          </button>
        </div>
        <div>{temp}</div>
        <div className="WeatherData">
          <WeatherIcon icon={props.currentData.icons} />
          Hello, today in {props.currentData.city} weather is:
          <ul>
            <li>
              <Time time={props.currentData.date} />
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
      <div className="ConvertTemperature">
        <div className="degree-choice">
          <button type="button" className="degree fahrenheit">
            F
          </button>
          <button
            type="button"
            className="degree celsius"
            onClick={showCelsius}
          >
            C
          </button>
        </div>
        <div>{temp}</div>
        <div className="WeatherData">
          Hello, today in {props.currentData.city} weather is:
          <ul>
            <li>
              <Time time={props.currentData.date} />
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
