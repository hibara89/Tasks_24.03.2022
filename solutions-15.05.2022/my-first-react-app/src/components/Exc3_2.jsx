import React from "react";

//Quiz, QuizTitle, Q1, Q1Title, Q1Input, Q2, Q2Title, Q2Input

function Quiz() {
  return (
    <div
      style={{
        width: "450px",
        height: "200px",
        border: "3px solid black",
        margin: "auto",
        padding: "10px",
      }}
    >
      <QuizTitle />
      <Q1 />
      <Q2 />
    </div>
  );
}

function QuizTitle() {
  return <h1>How Do You Like Front End?</h1>;
}
function Q1() {
  return (
    <div>
      <Q1Title />
      <Q1Input />
    </div>
  );
}
function Q1Title() {
  return (
    <div>
      <label>How Much you love front end?</label>
    </div>
  );
}
function Q1Input() {
  return <input type="range"></input>;
}
function Q2() {
  return (
    <div>
      <Q2Title />
      <Q2Input />
    </div>
  );
}
function Q2Title() {
  return (
    <div>
      <label>What is your favourite front end feature/topic?</label>
    </div>
  );
}
function Q2Input() {
  return <input type="text"></input>;
}

export class Exc3_2 extends React.Component {
  render() {
    return <div>{Quiz()}</div>;
  }
}
