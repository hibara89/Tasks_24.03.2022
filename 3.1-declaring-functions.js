// From function declarations to function expressions
function welcome() {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
}

//1
const welcome = function () {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
};

function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}

//2

const power = function (a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
};

function add(a, b = 5) {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
}

//3

const add = (a, b = 5) => {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
};

// From function expressions to function declarations
const hello = () => "Hello!";

//1

function hello() {
  return "Hello!";
}

const squareRoot = (a) => Math.sqrt(a);

//2

function squareRoot(a) {
  return Math.sqrt(a);
}

const randomNumbers = (a, b) => Math.random() * (a - b) + b;

function randomNumbers(a, b) {
  return Math.random() * (a - b) + b;
}
