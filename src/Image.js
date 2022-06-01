import React from "react";
import "./Image.css";
import WeatherIcon from "./WeatherIcon";
import Galaxy from "./media/WeatherApp/galaxybyLunaSmith.jpg";
import Night from "./media/WeatherApp/nightbyLunaSmith.jpg";
import Sunrise from "./media/WeatherApp/sunrisebyLunaSmith.jpg";
import Sunset from "./media/WeatherApp/sunsetbyLunaSmith.jpg";
import Day from "./media/WeatherApp/daybyLunaSmith.jpg";
import DayClouds from "./media/WeatherApp/daycloudsbyLunaSmith.jpg";

export default function Image(props) {
  let hour = props.date.getHours();
  if (hour < 6) {
    return (
      <div className="Image">
        <img src={Galaxy} alt="galaxy by Luna Smith" className="day-image" />

        <div className="row today-weather">
          <div className="col today-icon">
            <WeatherIcon icon={props.icon} />
            {props.currentTemp}
          </div>
        </div>
        <h2>{props.currentCity}</h2>
      </div>
    );
  } else if (hour > 6 && hour < 8) {
    return (
      <div className="Image">
        <img src={Sunrise} alt="sunrise by Luna Smith" className="day-image" />
        <div className="row today-weather">
          <div className="col today-icon">
            <WeatherIcon icon={props.icon} />
            {props.currentTemp}
          </div>
        </div>
        <h2>{props.currentCity}</h2>
      </div>
    );
  } else if (hour > 8 && hour < 12) {
    return (
      <div className="Image">
        <img src={Day} alt="day by Luna Smith" className="day-image" />

        <div className="row today-weather">
          <div className="col today-icon">
            <WeatherIcon icon={props.icon} />
            {props.currentTemp}
          </div>
        </div>
        <h2>{props.currentCity}</h2>
      </div>
    );
  } else if (hour > 12 && hour < 18) {
    return (
      <div className="Image">
        <img
          src={DayClouds}
          alt="day clouds by Luna Smith"
          className="day-image"
        />

        <div className="row today-weather">
          <div className="col today-icon">
            <WeatherIcon icon={props.icon} />
            {props.currentTemp}
          </div>
        </div>
        <h2>{props.currentCity}</h2>
      </div>
    );
  } else if (hour > 18 && hour < 20) {
    return (
      <div className="Image">
        <img src={Sunset} alt="sunset by Luna Smith" className="day-image" />
        <div className="row today-weather">
          <div className="col today-icon">
            <WeatherIcon icon={props.icon} />
            {props.currentTemp}
          </div>
        </div>
        <h2>{props.currentCity}</h2>
      </div>
    );
  } else {
    return (
      <div className="Image">
        <img src={Night} alt="thunder by Luna Smith" className="day-image" />

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
}
