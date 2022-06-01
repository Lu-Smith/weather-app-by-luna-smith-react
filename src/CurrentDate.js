import React from "react";
import "./CurrentDate.css";

export default function CurrentDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let number = props.date.getDate();
  let year = props.date.getFullYear();
  if (number === 1 || number === 31) {
    return (
      <div className="dateSentence">
        Today is <span className="highlightDay">{day}</span>, {number}st {month}{" "}
        {year}.
      </div>
    );
  } else if (number === 2) {
    return (
      <div className="dateSentence">
        Today is <span className="highlightDay">{day}</span>, {number}nd {month}{" "}
        {year}.
      </div>
    );
  } else if (number === 3) {
    return (
      <div className="dateSentence">
        Today is <span className="highlightDay">{day}</span>, {number}rd {month}{" "}
        {year}.
      </div>
    );
  } else {
    return (
      <div className="dateSentence">
        Today is <span className="highlightDay">{day}</span>, {number}th {month}{" "}
        {year}.
      </div>
    );
  }
}
