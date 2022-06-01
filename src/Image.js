import React from "react";
import "./Image.css";
import WeatherIcon from "./WeatherIcon";
import Thunder from "./media/WeatherApp/thunderbyLunaSmith.jpg";

export default function Image(props) {
  return (
    <div className="Image">
      <img src={Thunder} alt="thunder by Luna Smith" className="day-image" />

      <div className="row today-weather">
        <div className="col today-icon">
          <WeatherIcon icon={props.icon} />
          {props.currentTemp}
        </div>
      </div>
      <h2>{props.currentCity}</h2>
    </div>
  );
}
