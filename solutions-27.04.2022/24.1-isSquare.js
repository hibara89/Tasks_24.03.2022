//Object constructot function

function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

Square.prototype.isSquare = function () {
  if (this.a === this.b && this.b === this.c && this.c === this.d) return true;
  else {
    return false;
  }
};

const squareOne = new Square(1, 1, 8, 2);
const squareTwo = new Square(3, 3, 3, 3);

// console.log(squareOne);
// console.log(squareTwo);

console.log(squareTwo.isSquare());
