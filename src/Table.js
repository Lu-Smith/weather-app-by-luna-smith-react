import React from "react";
import Time from "./Time";
import DailyForecast from "./DailyForecast";
import "./Table.css";

export default function Table(props) {
  return (
    <div className="Table">
      <div className="row">
        <div className="col">
          <ul className="table-details">
            <li className="today main-day">Today</li>
            <li className="today">
              <Time time={props.timeNow} timezone={props.timezoneNow} />
            </li>
            <li className="today">{props.currentTemp}</li>
            <li className="today text-capitalize">{props.description}</li>
            <li className="today">🍃{props.wind}km/h</li>
            <li className="today">💧{props.humidity}%</li>
          </ul>
        </div>
        <div className="col">
          <DailyForecast coordinates={props.coordinatesNow} />
        </div>
      </div>
    </div>
  );
}
