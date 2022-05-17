import React from "react";

function card(props) {
  return (
    <div
      style={{
        width: "300px",
        height: "400px",
        margin: "auto",
        backgroundColor: props.color,
        display: "inline-block",
        marginRight: "20px",
      }}
    >
      <img alt="random" />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <a href="#">Share</a>
      <a href="#">Explore</a>
    </div>
  );
}

export class Exc4_2 extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          {card({
            color: "red",
            title: "Welcome",
            description: "This awesome place",
          })}
          {card({
            color: "lightgreen",
            title: "Hey everyone",
            description: "This awesome place",
          })}
          {card({
            color: "aqua",
            title: "Dear all",
            description: "This awesome place",
          })}
        </div>
      </div>
    );
  }
}
