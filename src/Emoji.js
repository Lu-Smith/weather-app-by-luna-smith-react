import React from "react";
import "./Emoji.css";
import BrokenClouds from "./media/Emojis/WeatherEmojis/brokencloudsbyLunaSmith.png";
import Clouds from "./media/Emojis/WeatherEmojis/cloudsbyLunaSmith.png";
import Drizzle from "./media/Emojis/WeatherEmojis/lightrainbyLunaSmith.png";
import Rain from "./media/Emojis/WeatherEmojis/rainbyLunaSmith.png";
import Mist from "./media/Emojis/WeatherEmojis/mistbyLunaSmith.png";
import PartlySunny from "./media/Emojis/WeatherEmojis/partlysunnybyLunaSmith.png";
import Sand from "./media/Emojis/WeatherEmojis/sandbyLunaSmith.png";
import Smoke from "./media/Emojis/WeatherEmojis/smokebyLunaSmith.png";
import Snow from "./media/Emojis/WeatherEmojis/snowbyLunaSmith.png";
import Clear from "./media/Emojis/WeatherEmojis/sunnybyLunaSmith.png";
import Thunderstorm from "./media/Emojis/WeatherEmojis/thunderbyLunaSmith.png";
import Tornado from "./media/Emojis/WeatherEmojis/tornadobyLunaSmith.png";

export default function Emoji(props) {
  if (
    props.descriptionNow === "few clouds" ||
    props.descriptionNow === "scattered clouds"
  ) {
    return (
      <div className="Emoji">
        <img
          src={PartlySunny}
          alt={props.descriptionNow}
          className="emoji-image"
        />
      </div>
    );
  } else if (props.descriptionNow === "overcast clouds") {
    return (
      <div className="Emoji">
        <img src={Clouds} alt={props.descriptionNow} className="emoji-image" />
      </div>
    );
  } else if (props.mainNow === "Drizzle") {
    return (
      <div className="Emoji">
        <img src={Drizzle} alt={props.descriptionNow} className="emoji-image" />
      </div>
    );
  } else if (props.mainNow === "Thunderstorm") {
    return (
      <div className="Emoji">
        <img
          src={Thunderstorm}
          alt={props.descriptionNow}
          className="emoji-image"
        />
      </div>
    );
  } else if (props.mainNow === "Clear") {
    return (
      <div className="Emoji">
        <img src={Clear} alt={props.descriptionNow} className="emoji-image" />
      </div>
    );
  } else if (props.mainNow === "Tornado") {
    return (
      <div className="Emoji">
        <img src={Tornado} alt={props.descriptionNow} className="emoji-image" />
      </div>
    );
  } else if (props.mainNow === "Smoke") {
    return (
      <div className="Emoji">
        <img src={Smoke} alt={props.descriptionNow} className="emoji-image" />
      </div>
    );
  } else if (props.mainNow === "Snow") {
    return (
      <div className="Emoji">
        <img src={Snow} alt={props.descriptionNow} className="emoji-image" />
      </div>
    );
  } else if (
    props.mainNow === "Rain" &&
    props.descriptionNow === "light rain"
  ) {
    return (
      <div className="Emoji">
        <img src={Drizzle} alt={props.descriptionNow} className="emoji-image" />
      </div>
    );
  } else if (props.mainNow === "Rain") {
    return (
      <div className="Emoji">
        <img src={Rain} alt={props.descriptionNow} className="emoji-image" />
      </div>
    );
  } else if (props.mainNow === "Mist") {
    return (
      <div className="Mist">
        <img src={Mist} alt={props.descriptionNow} className="emoji-image" />
      </div>
    );
  } else if (props.mainNow === "Sand") {
    return (
      <div className="Emoji">
        <img src={Sand} alt={props.descriptionNow} className="emoji-image" />
      </div>
    );
  } else {
    return (
      <div className="Emoji">
        <img
          src={BrokenClouds}
          alt={props.descriptionNow}
          className="emoji-image"
        />
      </div>
    );
  }
}
