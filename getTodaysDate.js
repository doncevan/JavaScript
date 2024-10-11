function getTodaysDate() {
  const date = new Date();
  return date;
}

//console.log(getTodaysDate());  or
const today = getTodaysDate();
console.log(today.toDateString());
