const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
//to fix the code we need to use the call method so we can use the getStrength method
function whoIsStronger(getStrength) {
  const myStrength = 82;

  if (getStrength.call(hero) < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}

console.log(whoIsStronger(hero.getStrength));

//getStrength() is a method in the object hero and it uses this, so we cannot use it outside this object (we will get undefined). once we use call with the function we can get the result from out object
