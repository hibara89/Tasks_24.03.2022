import React from "react";

function Box1() {
  return (
    <div
      style={{
        backgroundColor: "lightGreen",
        width: "700px",
        height: "500px",
        position: "absolute",
      }}
    >
      <Box2 />
    </div>
  );
}

function Box2() {
  return (
    <div
      style={{
        backgroundColor: "blue",
        width: "500px",
        height: "400px",
        position: "relative",
        top: "50px",
        left: "100px",
      }}
    >
      <Box3 />
    </div>
  );
}
function Box3() {
  return (
    <div
      style={{
        backgroundColor: "orangered",
        width: "400px",
        height: "300px",
        position: "relative",
        top: "50px",
        left: "50px",
      }}
    >
      <Box4 />
      <br></br> <Box4 />
    </div>
  );
}
function Box4() {
  return (
    <div
      style={{
        backgroundColor: "pink",
        width: "300px",
        height: "100px",
        position: "relative",
        top: "50px",
        left: "50px",
      }}
    ></div>
  );
}

export class Exc3_1 extends React.Component {
  render() {
    return <div>{Box1()}</div>;
  }
}
