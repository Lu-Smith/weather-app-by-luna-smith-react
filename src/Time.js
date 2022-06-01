import React from "react";

export default function Time(props) {
  let timezones = props.timezone;
  let localTime = props.time.getTime();
  let localOffset = props.time.getTimezoneOffset() * 60000;
  let stc = localTime + localOffset;
  let searchCity = stc + 1000 * +timezones;
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
