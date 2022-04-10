function stringLength(array) {
  let arrayLength = [];

  for (let i = 0; i < array.length; i++) {
    arrayLength[i] = array[i].length;
  }

  return console.log(arrayLength);
}

stringLength(["hi", "no", "yes", "n"]);
