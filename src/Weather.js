import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      descriptions: response.data.weather[0].description,
      icons: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
    });
  }
  function searchCity() {
    let apiKey = `530086b42621ecf2dfa680253f189a88`;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSearchCity(response) {
    setCity(response.target.value);
  }
  function handleSearch(event) {
    event.preventDefault();
    searchCity();
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <WeatherIcon
          description={weatherData.descriptions}
          icon={weatherData.icons}
        />
        <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Enter a city"
            autoFocus={true}
            onChange={handleSearchCity}
          />
          <input type="submit" value="Search" />
        </form>
        <WeatherData currentData={weatherData} />
      </div>
    );
  } else {
    searchCity();
    return "Hello World";
  }
}
