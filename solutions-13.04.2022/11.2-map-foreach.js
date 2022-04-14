//1
function doubleValues(arrayOfNum) {
  const newArray = arrayOfNum.map(function (int) {
    return int * 2;
  });
  console.log(newArray);
}

//2

function onlyEvenValues(array) {
  let newArrayEven = [];
  let i = 0;
  array.forEach((value) => {
    if (value % 2 === 0) {
      newArrayEven[i] = value;
      i++;
    }
  });
  return newArrayEven;
}

//console.log(onlyEvenValues([1, 5, 3, 6, 8, 8, 80]));

//3
function showFirstAndLast(array) {
  let newArraystring = [];
  let i = 0;
  array.forEach((element) => {
    if (typeof element === "string") {
      newArraystring[i] = element;
      i++;
    }
  });
  let arrayFirstLast = [
    newArraystring[0],
    newArraystring[newArraystring.length - 1],
  ];
  return arrayFirstLast;
}

// console.log(
//   showFirstAndLast([1, 2, "hello", "hey", 5, "dear", "man", "name", 7])
// );

//4

function vowelCount(string) {
  const newArray = string.split("");
  let aCount = 0,
    eCount = 0,
    iCount = 0,
    oCount = 0,
    uCount = 0;
  newArray.forEach((letter) => {
    if (letter === "a") aCount++;
    if (letter === "e") eCount++;
    if (letter === "i") iCount++;
    if (letter === "o") oCount++;
    if (letter === "u") uCount++;
  });
  const vowelObject = { a: aCount, e: eCount, i: iCount, o: oCount, u: uCount };

  return vowelObject;
}

//console.log(vowelCount("i aaam called hiba rashed"));

//5

function captilize(string) {
  const newArray = string.split("");
  newArray.forEach((letter, i) => {
    newArray[i] = letter.toUpperCase();
  });
  console.log(newArray);
}

captilize("appleJui  ce123");

//6
