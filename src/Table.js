import React from "react";
import Time from "./Time";
import "./Table.css";

export default function Table(props) {
  return (
    <div className="Table">
      <ul className="table-details">
        <li className="today">Today</li>
        <li className="today">
          <Time time={props.timeNow} />
        </li>
        <li className="today">{props.currentTemp}</li>
        <li className="today">{props.description}</li>
        <li className="today">🍃{props.wind}km/h</li>
        <li className="today">💧{props.humidity}%</li>
      </ul>
    </div>
  );
}
