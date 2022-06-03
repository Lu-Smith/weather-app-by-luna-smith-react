import React from "react";
import DayEmoji from "./DayEmoji";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function temperature() {
    let temperature = Math.round(props.data.temp.day);
    return temperature;
  }

  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = days[date.getDay()];
    return day;
  }

  function date() {
    let date = new Date(props.data.dt * 1000);
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let month = months[date.getMonth()];
    let number = date.getDate();
    if (number === 1 || number === 31) {
      return (
        <span className="daily-date">
          ${number}st ${month}
        </span>
      );
    } else if (number === 2) {
      return `${number}nd ${month}`;
    } else if (number === 3) {
      return `${number}rd ${month}`;
    } else {
      return `${number}th ${month}`;
    }
  }

  function wind() {
    let wind = Math.round(props.data.wind_speed);
    return wind;
  }

  return (
    <div className="WeatherForecastDay">
      <ul className="daily-table">
        <li className="main-daily-day">{day()}</li>
        <li className="day date">{date()}</li>
        <li className="day">{temperature()}</li>
        <li className="day emoji-line">
          <DayEmoji
            descriptionNow={props.data.weather[0].description}
            mainNow={props.data.weather[0].main}
          />
        </li>
        <li className="day">🍃 {wind()}</li>
        <li className="day">💧 {props.data.humidity}</li>
      </ul>
    </div>
  );
}
