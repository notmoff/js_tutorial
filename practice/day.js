function dayName(days) {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                          "Thursday", "Friday", "Saturday"];
  return daysOfTheWeek[days.getDay()];
}

function greeting(days) {
  return `hello, world! 素敵な${dayName(days)}になりますように。`
}
