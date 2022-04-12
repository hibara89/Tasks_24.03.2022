let populations = [800, 56, 90, 34];

function percentageOfWorld1(population) {
  const worldPopulatin = 7900;

  let percentageOf = (population / worldPopulatin) * 100;
  return percentageOf;
}

function populationPercentages(populations) {
  let percentages = [];
  let i = 0;
  while (i < populations.length) {
    percentages[i] = percentageOfWorld1(populations[i]);
    i++;
  }
  return percentages;
}

//Test
console.log(populationPercentages(populations));

//in this case I prefer the for loop, it is more structured and we know the number of iterations.
