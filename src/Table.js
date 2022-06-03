import React from "react";
import Time from "./Time";
import DailyForecast from "./DailyForecast";
import Emoji from "./Emoji";
import "./Table.css";

export default function Table(props) {
  return (
    <div className="Table">
      <div className="row">
        <div className="col-3 p-0">
          <ul className="table-details">
            <li className="main-day">Today</li>
            <li className="today">
              <Time time={props.timeNow} timezone={props.timezoneNow} />
            </li>
            <li className="today">{props.currentTemp}</li>
            <li className="today emoji-line">
              <Emoji descriptionNow={props.description} mainNow={props.main} />
            </li>
            <li className="today">
              🍃{props.wind} <span className="unit">km/h</span>
            </li>
            <li className="today">
              💧{props.humidity}
              <span className="unit">%</span>
            </li>
          </ul>
        </div>
        <div className="col-9 p-0">
          <DailyForecast
            coordinates={props.coordinatesNow}
            unitNow={props.units}
          />
        </div>
      </div>
    </div>
  );
}
