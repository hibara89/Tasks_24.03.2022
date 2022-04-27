//filter even numbers (new array with even numbers only)

function array(arr) {
  this.arr = arr;
}

array.prototype.filterEven = function () {
  let arrayEven = [];
  for (let i = 0; i < this.arr.length; i++) {
    if (this.arr[i] % 2 === 0) {
      arrayEven.push(this.arr[i]);
    }
  }

  return arrayEven;
};

const numArray = new array([1, 2, 3, 4, 5, 8, 9, 12, 11, 13]);

console.log(numArray.filterEven());
