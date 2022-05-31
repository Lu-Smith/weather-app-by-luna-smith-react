import React from "react";

export default function Time(props) {
  let hour = props.date.getHours();
  let minute = props.date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return (
    <div className="CurrentDate">
      {hour}:{minute}
    </div>
  );
}
