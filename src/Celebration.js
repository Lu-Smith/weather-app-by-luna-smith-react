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
    return "Happy New Year 🎇";
  } else if (month === "February" && number !== 14) {
    return "National Bird-Feeding Month 🦆";
  } else if (month === "February" && number === 14) {
    return "Happy Valentine’s Day 💘";
  } else if (month === "March") {
    return "Women's History Month 📜";
  } else if (month === "April" && number !== 22) {
    return "National Pet Month 🐶";
  } else if (month === "April" && number === 22) {
    return "Happy Earth Day 🌍";
  } else if (month === "May" && number !== 6) {
    return "National Bike Month 🚲";
  } else if (month === "May" && number === 6) {
    return "National Space Day 🚀";
  } else if (month === "June") {
    return "LGBT Pride Month 🏳️‍🌈";
  } else if (month === "July") {
    return "National Ice Cream Month 🍧";
  } else if (month === "August") {
    return "National Yoga Month 🧘";
  } else if (month === "September") {
    return "National Yoga Month 🧘";
  } else if (month === "October") {
    return "National Pizza Month 🍕";
  } else if (month === "November") {
    return "Academic Writing Month 📖";
  } else if (month === "December") {
    return "This year is almost over ⛄";
  }
}
