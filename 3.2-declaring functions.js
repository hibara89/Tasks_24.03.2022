// From function declarations to explicit and implicit return functions (one of each).
function welcome() {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
}

//1
const welcome = () => "Welcome to Appleseeds Bootcamp!";

function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}

//2
const power = (a) => {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
};

//or
const power = (a) => Math.pow(a, 2);

// From function expressions to IIFE functions.

//IIFE = Immediately-InVOKED Function Expression
const squareRoot = (a) => Math.sqrt(a);

//1

(function squareRoot(a) {
  return Math.sqrt(a);
})(5);

const randomNumbers = (a, b) => Math.random() * (a - b) + b;

//2

(function randomNumbers(a, b) {
  return Math.random() * (a - b) + b;
})(4, 5);
