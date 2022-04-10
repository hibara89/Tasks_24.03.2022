//1

let arr = [];
for (let i = 0; i < 100; i++) {
  arr[i] = arr.fill([5]);
}
console.log(arr);

//2

const newArr = Array.from({ length: 100 }, (v, i) => i + 1);

console.log(newArr);

//3
