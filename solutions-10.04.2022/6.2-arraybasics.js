const people = ["Greg", "Mary", "Devon", "James"];

//1

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

//2

people.shift();

//3

people.pop();

//4

people.unshift("Matt");

//5

people.push("Hiba");

//6

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);

  if (people[i] === "Mary") {
    break;
  }
}

//7

let newPeople = people.slice(2);

//8

console.log(people.indexOf("Mary"));

//9
console.log(people.indexOf("Foo"));

//10
people.splice(2, 1);
people.splice(2, 0, "Elizabeth", "Artie");
console.log(people);

//11
const withBob = "Bob".concat(people);
