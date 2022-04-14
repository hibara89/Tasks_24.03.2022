const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

//1
function names(array) {
  array.forEach((person) => {
    return console.log(person.name);
  });
}
//console.log(names(data));

//2

function beforeYear90(array) {
  const newArray = array.filter((person) => {
    let yearOfBirth = person.birthday.slice(-4);
    yearOfBirth = Math.floor(yearOfBirth);
    if (yearOfBirth < 1990) return true;
  });
  return newArray;
}

//console.log(beforeYear90(data));

//3

function foodCategory(array) {
  const newarray = array.map((element) => {
    return Object.values(element.favoriteFoods);
  });
  console.log(newarray);
}

foodCategory(data);
