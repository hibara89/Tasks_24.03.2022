//Toam solution
const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const countSeries = function (array) {
  const countSeriesObject = {};
  for (let i = 0; i < array.length; i += 1) {
    const wordLength = array[i].length;
    for (let j = 0; j < wordLength; j += 1) {
      if (typeof array[i][j] !== "string") continue;
      const letter = array[i][j].toLowerCase();
      if (letter === "" || letter === " ") continue;
      if (countSeriesObject[letter] === undefined) {
        countSeriesObject[letter] = 1;
        continue;
      }
      countSeriesObject[letter] += 1;
    }
  }

  return countSeriesObject;
};

console.log(countSeries(array));
