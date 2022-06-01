import React from "react";

export default function Sunrise(props) {
  let hour = props.time.sunrise.getHours();
  let minute = props.time.sunrise.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return (
    <div className="CurrentDate">
      {hour}:{minute}
    </div>
  );
}
