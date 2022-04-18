//.1-max

const numbers = [1, 2, 3, 4, 5, 6, 7];

const maxNumber = numbers.reduce((max, currentValue) => {
  if (max > currentValue) return max;

  return currentValue;
});

//console.log(maxNumber);

//.2-sum of even numbers
const sumEven = numbers.reduce((sumEvenNum, currentValue) => {
  if (currentValue % 2 === 0) return currentValue + sumEvenNum;

  return sumEvenNum;
});

//console.log(sumEven);

//.3 average
const average =
  numbers.reduce((sum, value) => {
    return sum + value;
  }, 0) / numbers.length;

console.log(average);
