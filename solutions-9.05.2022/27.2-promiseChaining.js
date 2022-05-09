function makeAllCaps(arrayOfWords) {
  for (let i = 0; i < arrayOfWords.length; i++) {
    arrayOfWords[i] = arrayOfWords[i].toUpperCase();
    return new Promise((resolve, reject) => {
      if (typeof arrayOfWords[i] === "string") {
        resolve();
      } else {
        reject();
      }
    });
  }
}

function sortWords(arrayOfWords) {
  arrayOfWords.sort();
  for (let i = 0; i < arrayOfWords.length; i++) {
    return new Promise((resolve, reject) => {
      if (typeof arrayOfWords[i] === "string") {
        resolve();
      } else {
        reject();
      }
    });
  }
}

makeAllCaps(["hey", "ao", "yoo"])
  .then(() => {
    console.log("Yess!!");
  })
  .catch(() => {
    console.log("error!");
  });

sortWords(["hey", "ao", 5])
  .then(() => {
    console.log("Yess!!");
  })
  .catch(() => {
    console.log("error!");
  });
