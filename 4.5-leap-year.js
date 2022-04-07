function leapYear(year) {
  let isDivbyFour = year % 4 === 0;
  let isDivbyHundred = year % 100 === 0;
  let isDivbyFoHun = year % 400 === 0;
  if ((isDivbyFour && !isDivbyHundred) || (isDivbyFour && isDivbyFoHun)) {
    return console.log("It is indeed a leap year");
  } else {
    return console.log("This is not a leap year");
  }
}

leapYear(2400);
