const storm = {
  superPower: "flying",
};

function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}

storm.printSuperPower = printSuperPower;
storm.printSuperPower();

//another option is using the call method
//printSuperPower.call(storm);
