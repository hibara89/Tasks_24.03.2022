//1
//console.log(this);
//this will refer to the window object

//2
// const myObj = {
//   name: "Timmy",
//   greet: () => {
//     console.log(`Hello ${this.name}`);
//   },
// };
// myObj.greet();

// arrow function get the same this as the global scope(window in this case) so this.name is undefined. to fix this problem we shoul use function declaration (not arrow functions)

// const myObj = {
//   name: "Timmy",
//   greet() {
//     console.log(`Hello ${this.name}`);
//   },
// };
// myObj.greet();

//3
// const myFuncDec = function () {
//   console.log(this);
// };

// in a function this refers to the window

//4
// const myFuncArrow = () => {
//   console.log(this);
// };
// myFuncArrow();
// With arrow functions the this keyword always represents the object that defined the arrow function.

//5
// document.querySelector(".element").addEventListener(() => {
//   console.log(this);
// });

//the window-to fix it we should avoid arrow function
