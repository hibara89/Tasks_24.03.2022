function describeCountry(country, population, capitalCity) {
  let descripCountry = `${country} has ${population} million people and its capital city is ${capitalCity}`;

  return descripCountry;
}

let countryOne = describeCountry("Israel", 9, "Jerusalem");
let countryTwo = describeCountry("Austria", 9, "Vienna");
let countryThree = describeCountry("Finland", 6, "Helsinke");

console.log(countryOne);
console.log(countryTwo);
console.log(countryThree);
