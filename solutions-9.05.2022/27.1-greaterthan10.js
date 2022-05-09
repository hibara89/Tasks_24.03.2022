const IfGreaterThanTen = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve();
    } else {
      reject();
    }
  });
};

IfGreaterThanTen()
  .then(() => {
    console.log("The number is greater than 10");
  })
  .catch(() => {
    console.log("The number is less than or equal to 10");
  });
