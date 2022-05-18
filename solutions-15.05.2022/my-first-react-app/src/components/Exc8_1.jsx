import React, { Component } from "react";
import "./style.css";

export class Exc81 extends Component {
  constructor() {
    super();
    this.state = { favouriteColor: "aqua" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favouriteColor: "red" });
    }, 4000);
  }

  componentDidUpdate() {
    const textAfterUpdate = document.querySelector("#updated");
    textAfterUpdate.innerHTML = `The updated favorite color is ${this.state.favouriteColor}`;

    console.log("The updated favorite color is", this.state.favouriteColor);
  }

  render() {
    return (
      <div>
        <h1>My favourite color is {this.state.favouriteColor}</h1>
        <div id="updated"></div>
      </div>
    );
  }
}
