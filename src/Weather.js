import React, { useState } from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import Time from "./Time";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      descriptions: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        Hello, today in {weatherData.city} weather is:
        <ul>
          <li>
            <Time date={weatherData.date} />
          </li>
          <li>{Math.round(weatherData.temperature)}°C</li>
          <li>{weatherData.descriptions}</li>
          <li>{Math.round(weatherData.wind)}km/h</li>
          <li>{weatherData.humidity}%</li>
        </ul>
        <div>
          <CurrentDate date={weatherData.date} />
        </div>
      </div>
    );
  } else {
    let apiKey = `530086b42621ecf2dfa680253f189a88`;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Hello World";
  }
}
