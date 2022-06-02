import axios from "axios";
import React, { useState } from "react";
import "./DailyForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function DailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleDailyResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="DailyForecast">
        <div className="row">
          <div className="col table-details">
            <WeatherForecastDay data={forecast[1]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `c53481cd5839be8ed0b6899ac592e3a7`;
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleDailyResponse);
    return null;
  }
}
