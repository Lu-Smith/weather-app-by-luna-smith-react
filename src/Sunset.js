import React from "react";

export default function Sunset(props) {
  let hour = props.time.sunset.getHours();
  let minute = props.time.sunset.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return (
    <div className="Sunset">
      {hour}:{minute}
    </div>
  );
}
