const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

// console.log(candyStore.candies[0].id);
//1
function getCandy(candyStore, id) {
  for (let i = 0; i < candyStore.candies.length; i++) {
    if (candyStore.candies[i].id === id) return candyStore.candies[i];
  }
}
//console.log(getCandy(candyStore, "5hd7y"));

//2
function getPrice(candyStore, id) {
  for (let i = 0; i < candyStore.candies.length; i++) {
    if (candyStore.candies[i].id === id) return candyStore.candies[i].price;
  }
}

//console.log(getPrice(candyStore, "5hd7y"));

//3
function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({ name: name, id: id, price: price, amount: "1" }); //your code
}

//4

function buy(candyStore, id) {}
