import React, { useState } from "react";
import CurrentDate from "./CurrentDate";
import Time from "./Time";
import Key from "./Key";
import Image from "./Image";
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
        <Image
          currentTemp={temp}
          currentCity={props.currentData.city}
          icon={props.currentData.icons}
        />
        <div className="WeatherData">
          <div className="table">
            <ul className="table-details">
              <li className="today">Today</li>
              <li className="today">
                <Time time={props.currentData.date} />
              </li>
              <li className="today">{temp}</li>
              <li className="today">{props.currentData.descriptions}</li>
              <li className="today">
                🍃{Math.round(props.currentData.wind)}km/h
              </li>
              <li className="today">💧{props.currentData.humidity}%</li>
            </ul>
          </div>
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
        <Image
          currentTemp={temp}
          currentCity={props.currentData.city}
          icon={props.currentData.icons}
        />
        <div className="WeatherData">
          <div className="table">
            <ul className="table-details">
              <li className="today">Today</li>
              <li className="today">
                <Time time={props.currentData.date} />
              </li>
              <li className="today">{temp}</li>
              <li className="today">{props.currentData.descriptions}</li>
              <li className="today">
                {Math.round(props.currentData.wind)}km/h
              </li>
              <li className="today">{props.currentData.humidity}%</li>
            </ul>
          </div>
          <div>
            <CurrentDate date={props.currentData.date} />
            <Key />
          </div>
        </div>
      </div>
    );
  }
}
