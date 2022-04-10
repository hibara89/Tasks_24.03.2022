//1
const arr = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//2

function arrayLength(array1) {
  let length = 0;
  let array2 = [];
  while (array1 !== array2) {
    array1.pop();
    length++;
  }
  return length;
}

//3
function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + array[i];
  }

  return sum;
}

//4

function marrayMulti(array) {
  let multi = 1;
  for (let i = 0; i < arr.length; i++) {
    multi = multi * array[i];
  }

  return multi;
}
