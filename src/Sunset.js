import React from "react";

export default function Sunset(props) {
  let hour = props.date.sunset.getHours();
  let minute = props.date.sunset.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return (
    <div className="Sunset">
      {hour}:{minute}
    </div>
  );
}
