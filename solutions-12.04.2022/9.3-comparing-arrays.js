const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];

const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function sameItems(array1, array2) {
  let sum = 0;
  let commonItemsArray = [];

  for (let i = 0; i < food.length; i++) {
    for (let j = 0; j < food1.length; j++) {
      if (food[i] === food1[j]) {
        commonItemsArray[sum] = food[i];
        sum = sum + 1;
      }
    }
  }
  if (sum === 0) {
    return console.log(false);
  } else {
    return console.log(commonItemsArray);
  }
}

sameItems(food, food1);
