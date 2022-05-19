import React from "react";
import "./style.css";

class CustomButton extends React.Component {
  state = { color: this.props.color };

  render() {
    console.log(this.state);
    return (
      <div>
        <button
          style={{ backgroundColor: this.state.color }}
          onClick={this.props.Clicked}
        >
          {this.state.color}
        </button>
      </div>
    );
  }
}

export class Exc11 extends React.Component {
  state = { clickedColor: "" };
  colors = ["red", "blue", "yellow"];

  clickonButton = (event) => {
    this.setState({ clickedColor: event.target.style.backgroundColor });
  };

  render() {
    return (
      <div>
        {this.colors.map((color) => (
          <CustomButton color={color} Clicked={this.clickonButton} />
        ))}
        <h2>The selected color is:{this.state.clickedColor}</h2>
      </div>
    );
  }
}
