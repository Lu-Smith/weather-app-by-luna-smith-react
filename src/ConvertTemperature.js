import React, { useState } from "react";
import CurrentDate from "./CurrentDate";
import Key from "./Key";
import Image from "./Image";
import Table from "./Table";
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
          timezoneNow={props.currentData.timezone}
          timeNow={props.currentData.date}
        />

        <div className="WeatherData">
          <Table
            timeNow={props.currentData.date}
            currentTemp={temp}
            description={props.currentData.descriptions}
            wind={Math.round(props.currentData.wind)}
            humidity={props.currentData.humidity}
            timezoneNow={props.currentData.timezone}
          />
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
          timezoneNow={props.currentData.timezone}
          timeNow={props.currentData.date}
        />
        <div className="WeatherData">
          <Table
            timeNow={props.currentData.date}
            currentTemp={temp}
            description={props.currentData.descriptions}
            wind={Math.round(props.currentData.wind)}
            humidity={props.currentData.humidity}
            timezoneNow={props.currentData.timezone}
          />
          <div>
            <CurrentDate date={props.currentData.date} />
            <Key />
          </div>
        </div>
      </div>
    );
  }
}
