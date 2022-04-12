//1

const myCountry = {
  country: "Austria",
  capital: "Vienna",
  language: "German",
  population: 9,
  neighbours: 5,
};

//2
const myCountry = {
  country: "Austria",
  capital: "Vienna",
  language: "German",
  population: 9,
  neighbours: 5,
  describe: function () {
    return `${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours} and a capital called ${this.capital} `;
  },
};

//3

console.log(myCountry.describe());

//4
const myCountry = {
  country: "Austria",
  capital: "Vienna",
  language: "German",
  population: 9,
  neighbours: 5,
  checklsland: function () {
    return this.neighbours > 0 ? false : true;
  },
};

console.log(myCountry.checklsland());
