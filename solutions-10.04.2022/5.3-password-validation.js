//1.if/else
function passValidation1(password) {
  let passLength = password.length;

  if (passLength > 7) {
    console.log("Strong");
  } else console.log("Weak");
}
//2.ternary
function passValidation2(password) {
  let passLength = password.length;

  let strength = passLength > 7 ? console.log("Strong") : console.log("Weak");
}

//3.&&operator
function passValidation3(password) {
  let passLength = password.length;
  let validTest = passLength > 7 && true;

  if (validTest) {
    console.log("Strong");
  } else console.log("Weak");
}

//4. Create an “advanced” password validation function:

function advancedPassValidation(password) {
  let isUpperLetter = password.toLowerCase() !== password;

  password.length > 7 && isUpperLetter
    ? console.log("Very Strong")
    : password.length > 7
    ? console.log("Strong")
    : console.log("Weak");
}

advancedPassValidation("abnlklB");
