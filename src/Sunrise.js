import React from "react";

export default function Sunrise(props) {
  let timezone = props.time.timezone;
  let localTime = props.time.sunrise.getTime();
  let localOffset = props.time.sunrise.getTimezoneOffset() * 60000;
  let stc = localTime + localOffset;
  let searchCity = stc + 1000 * +timezone;
  let searchDate = new Date(searchCity);
  let hour = searchDate.getHours();
  let minute = searchDate.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return (
    <div className="CurrentDate">
      {hour}:{minute}
    </div>
  );
}
