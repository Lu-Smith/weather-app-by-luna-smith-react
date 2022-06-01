import React from "react";

export default function Sunrise(props) {
  let hour = props.date.sunrise.getHours();
  let minute = props.date.sunrise.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return (
    <div className="CurrentDate">
      {hour}:{minute}
    </div>
  );
}
