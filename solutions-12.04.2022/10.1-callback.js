//1
/*
function logConsole(str1) {
  console.log("the string is :", str1);
}

function isString(str, callBack) {
  if (typeof str === "string") {
    callBack(str);
  } else console.log("this is not a string");
}

isString("hello", logConsole);
isString(true, logConsole);
isString(1, logConsole);
*/

//2

function firstWordUpperCase(str, callback) {
  if (typeof str !== "string") {
    console.log("Please enter a string");
  } else {
    const array = str.split(" ");
    array[0] = array[0].toUpperCase();
    captilizeString = array.join(" ");
    console.log(callback(array));
  }
}

function dashedCreat(arrayOfWords) {
  return arrayOfWords.join("-");
}

//3

function dotCreat(arrayOfWords) {
  return arrayOfWords.join(".");
}

firstWordUpperCase("apple juice lemon", dotCreat);
