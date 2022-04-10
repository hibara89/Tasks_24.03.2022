//1
// let populations = [800, 56, 90, 34];
//2

//from 3.3
function percentageOfWorld1(population) {
  const worldPopulatin = 7900;

  let percentageOf = (population / worldPopulatin) * 100;
  return percentageOf;
}

function populationPercentages(populations) {
  let percentages = [];

  for (i = 0; i < populations.length; i++) {
    percentages[i] = percentageOfWorld1(populations[i]);
  }
  return percentages;
}

//Test
console.log(populationPercentages([800, 56, 90, 34]));
