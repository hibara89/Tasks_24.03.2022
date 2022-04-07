function percentageOfWorld1(population) {
  const worldPopulatin = 7900;

  let percentageOf = (population / worldPopulatin) * 100;
  return percentageOf;
}

let indiaPopulation = Math.round(percentageOfWorld1(1380) * 100) / 100;
let usaPopulation = Math.round(percentageOfWorld1(331) * 100) / 100;
let brazilPopulation = Math.round(percentageOfWorld1(212) * 100) / 100;

console.log(
  `India has 1380 million peaple, it's about ${indiaPopulation}% of the world population`
);

console.log(
  `The USA has 331 million peaple, it's about ${usaPopulation}% of the world population`
);

console.log(
  `Brazil has 212 million peaple, it's about ${brazilPopulation}% of the world population`
);
