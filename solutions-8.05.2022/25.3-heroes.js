const wonderWoman = {
  name: "Diana Prince",
};
const batman = {
  name: "Bruce Wayne",
};
const superHeroes = [wonderWoman, batman];

function printName() {
  console.log(`my name is ${this.name}`);
}

function printHeroes(heroes, printFunc) {
  //add your code here
  printFunc.call(heroes);
}

for (let i = 0; i < superHeroes.length; i++) {
  printHeroes(superHeroes[i], printName);
}

//we can put the superherous names
printHeroes(wonderWoman, printName);
printHeroes(batman, printName);
