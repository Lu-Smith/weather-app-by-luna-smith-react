import React from "react";

export default function Sunset(props) {
  let timezone = props.time.timezone;
  let localTime = props.time.sunset.getTime();
  let localOffset = props.time.sunset.getTimezoneOffset() * 60000;
  let stc = localTime + localOffset;
  let searchCity = stc + 1000 * +timezone;
  let searchDate = new Date(searchCity);
  let hour = searchDate.getHours();
  let minute = searchDate.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return (
    <div className="Sunset">
      {hour}:{minute}
    </div>
  );
}
