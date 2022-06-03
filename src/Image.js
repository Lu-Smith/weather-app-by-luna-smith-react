import React from "react";
import "./Image.css";
import WeatherIcon from "./WeatherIcon";
import Galaxy from "./media/WeatherApp/galaxybyLunaSmith.jpg";
import Night from "./media/WeatherApp/nightbyLunaSmith.jpg";
import Sunrise from "./media/WeatherApp/sunrisebyLunaSmith.jpg";
import Sunset from "./media/WeatherApp/sunsetbyLunaSmith.jpg";
import Day from "./media/WeatherApp/daybyLunaSmith.jpg";
import DayClouds from "./media/WeatherApp/daycloudsbyLunaSmith.jpg";
import Snow from "./media/WeatherApp/snowbyLunaSmith.jpg";

export default function Image(props) {
  let month = props.timeNow.getMonth();
  let timezones = props.timezoneNow;
  let localTime = props.timeNow.getTime();
  let localOffset = props.timeNow.getTimezoneOffset() * 60000;
  let stc = localTime + localOffset;
  let searchCity = stc + 1000 * +timezones;
  let searchDate = new Date(searchCity);
  let hour = searchDate.getHours();
  if (hour <= 5) {
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
  } else if (hour > 5 && hour <= 8) {
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
  } else if (
    hour > 8 &&
    hour <= 12 &&
    month !== 0 &&
    month !== 1 &&
    month !== 2
  ) {
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
  } else if (
    hour > 8 &&
    hour <= 12 &&
    (month === 0 || month === 1 || month === 2)
  ) {
    return (
      <div className="Image">
        <img src={Snow} alt="day by Luna Smith" className="day-image" />

        <div className="row today-weather">
          <div className="col today-icon">
            <WeatherIcon icon={props.icon} />
            {props.currentTemp}
          </div>
        </div>
        <h2>{props.currentCity}</h2>
      </div>
    );
  } else if (hour > 12 && hour <= 17) {
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
  } else if (hour > 17 && hour <= 21) {
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
