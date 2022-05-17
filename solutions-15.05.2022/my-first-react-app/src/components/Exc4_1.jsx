import React from "react";

function btn(props) {
  return (
    <div>
      <button>{props.content}</button>
    </div>
  );
}

export class Exc4_1 extends React.Component {
  render() {
    return (
      <div>
        {btn({ content: "Important" })}
        {btn({ content: "Not Important" })}
      </div>
    );
  }
}
