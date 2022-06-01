import React from "react";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";
import Sun from "./media/Emojis/WeatherEmojis/sunbyLunaSmith.png";
import Moon from "./media/Emojis/WeatherEmojis/moonbyLunaSmith.png";
import "./SunriseSunset.css";

export default function SunriseSunset(props) {
  return (
    <div className="SunriseSunset">
      <div className="row top">
        <div className="col-3">
          <img src={Sun} alt="sun emoji by Luna Smith" className="sun" />
          <div className="sunrise">
            <Sunrise time={props.currentData} />
          </div>
        </div>
        <div className="col-6 day-celebration">
          <h1>Pancake Day 🥞</h1>
        </div>
        <div className="col-3">
          <img src={Moon} alt="moon emoji by Luna Smith" className="moon" />
          <div className="sunset">
            <Sunset time={props.currentData} />
          </div>
        </div>
      </div>
    </div>
  );
}
