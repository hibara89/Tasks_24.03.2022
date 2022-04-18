const foods = ["falafel", "Sabich", "hummus", "pizza with extrapineapple"];

//a.1
console.log(foods.slice().sort());

//a.2
foods.sort(function (a, b) {
  if (a.toUpperCase > b.toUpperCase) {
    return -1;
  }
  if (b > a) {
    return 1;
  }
  return 0;
});
console.log(foods);

const arr = ["a", "b", "c", "A", "B", "C"];

console.log(arr.sort());
