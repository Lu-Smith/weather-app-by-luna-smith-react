export default function Celebration(props) {
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
  let month = months[props.date.getMonth()];
  let number = props.date.getDate();
  if (month === "January") {
    return "Happy New Year π";
  } else if (month === "February" && number !== 14) {
    return "National Bird-Feeding Month π¦";
  } else if (month === "February" && number === 14) {
    return "Happy Valentineβs Day π";
  } else if (month === "March") {
    return "Women's History Month π";
  } else if (month === "April" && number !== 22) {
    return "National Pet Month πΆ";
  } else if (month === "April" && number === 22) {
    return "Happy Earth Day π";
  } else if (month === "May" && number !== 6) {
    return "National Bike Month π²";
  } else if (month === "May" && number === 6) {
    return "National Space Day π";
  } else if (month === "June") {
    return "LGBT Pride Month π³οΈβπ";
  } else if (month === "July") {
    return "National Ice Cream Month π§";
  } else if (month === "August") {
    return "National Yoga Month π§";
  } else if (month === "September") {
    return "National Yoga Month π§";
  } else if (month === "October") {
    return "National Pizza Month π";
  } else if (month === "November") {
    return "Academic Writing Month π";
  } else if (month === "December") {
    return "This year is almost over β";
  }
}
