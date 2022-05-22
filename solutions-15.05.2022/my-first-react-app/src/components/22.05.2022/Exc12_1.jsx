import React from "react";
import axios from "axios";

export class Exc121 extends React.Component {
  state = {
    joke: "",
    category: [
      "animal",
      "career",
      "celebrity",
      "dev",
      "explicit",
      "fashion",
      "food",
      "history",
      "money",
      "movie",
      "music",
      "political",
      "religion",
      "science",
      "sport",
      "travel",
    ],
    onClickCategory: "",
  };

  getJokes = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");

    console.log(response.data.value);
    this.setState({ joke: response.data.value });
  };

  getJokeFromCategory = async () => {
    const category = this.props.category;
    console.log(category);
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    console.log(response.data.value);
  };

  render() {
    return (
      <div>
        <button onClick={this.getJokes}>Get a Random Joke</button>
        <div>{this.state.joke}</div>
        {this.state.category.map((category) => {
          return (
            <button onClick={this.getJokeFromCategory} category={category}>
              {category}
            </button>
          );
        })}
        <div>The joke:</div>
      </div>
    );
  }
}
