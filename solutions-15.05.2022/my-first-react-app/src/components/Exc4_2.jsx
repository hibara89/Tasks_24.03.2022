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
        marginTop: "20px",
        marginRight: "20px",
      }}
    >
      <img alt="random" src={props.source} />
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
            source: "https://picsum.photos/300/200?random=1",
          })}
          {card({
            color: "lightgreen",
            title: "Hey everyone",
            description: "This great place",
            source: "https://picsum.photos/300/200?random=2",
          })}
          {card({
            color: "aqua",
            title: "Dear all",
            description: "This phenomenal place",
            source: "https://picsum.photos/300/200?random=3",
          })}
        </div>
      </div>
    );
  }
}
