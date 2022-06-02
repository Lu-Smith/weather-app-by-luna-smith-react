import React from "react";

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
      return `${number}st ${month}`;
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
      <div className="DailyForecast-day main-daily-day">{day()}</div>
      <div className="DailyForecast-date day">{date()}</div>
      <div className="DailyForecast-temperature day">{temperature()}</div>
      <div className="DailyForecast-description day text-capitalize">
        {props.data.weather[0].description}
      </div>
      <div className="DailyForecast-wind day">🍃 {wind()}</div>
      <div className="DailyForecast-humidity day">
        💧 {props.data.humidity}%
      </div>
    </div>
  );
}
