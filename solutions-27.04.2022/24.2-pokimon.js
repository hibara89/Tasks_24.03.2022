function pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

//1
const pokimonOne = new pokemon("Butterfree", "Bug", [
  "Flying",
  "grass",
  "fire",
]);
const pokimonTwo = new pokemon("Charizard", "Fire", [
  "Flying",
  "grass",
  "fire",
]);
const pokimonThree = new pokemon("Venusaur", "Grass", [
  "Flying",
  "grass",
  "fire",
]);

//2
pokemon.prototype.callPokemon = function () {
  console.log("I choose you", this.name);
};

//3
pokemon.prototype.attack = function (attackNum) {
  console.log("The attack method is:", this.attackList[attackNum]);
};

//Call each pokemon with the 2 methods you created.

pokimonOne.callPokemon();
pokimonTwo.callPokemon();
pokimonThree.callPokemon();

pokimonOne.attack(2);
pokimonTwo.attack(0);
pokimonThree.attack(1);
