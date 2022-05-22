import React from "react";
import axios from "axios";

function Input() {}

function Button() {
  return (
    <>
      <button>hello</button>
    </>
  );
}

function DisplayAvatar() {}

function MappingOverAvatar() {}

export class Exc131 extends React.Component {
  state = { src: " ", name: "", age: "" };

  getAvatar = async () => {
    const avatar = await axios.get("https://randomuser.me/api/");
    console.log(avatar.data.results[0].picture.large);
    this.setState({ src: avatar.data.results[0].picture.large });
  };

  render() {
    return (
      <div>
        <button onClick={this.getAvatar}>he</button>
        <img src={this.state.src} />
        <Button />
      </div>
    );
  }
}
