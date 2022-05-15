import React from "react";

const data = ["hello", "world"];

const number1 = 5;
const number2 = 6;
const sumOfnumbers = number1 + number2;

const string = "I love React!";

export class Exc2_2 extends React.Component {
  render() {
    return (
      <div>
        <h1>{`${data[0]} ${data[1]}`} </h1>
        <h2>{`${number1}+${number2}=${sumOfnumbers}`}</h2>
        <h3>{` The string’s length is ${string.length}`}</h3>
      </div>
    );
  }
}
