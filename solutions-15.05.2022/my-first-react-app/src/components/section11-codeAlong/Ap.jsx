import React from "react";
import SearchBar1 from "./SearchBar1";
import youtube from "./apis/youtube";
import axios from "axios";
import VideoList from "./videoList";

class App11 extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar1 onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App11;
