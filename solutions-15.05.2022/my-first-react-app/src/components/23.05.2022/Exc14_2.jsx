import React from "react";

export class Exc142 extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    state = { textToCopy: "  kjhj" };
  }
  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }
  clickHandler = () => {
    this.inputRef.current.select();
    console.log(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <br></br>
        <button
          onClick={() => {
            navigator.clipboard.writeText(this.state.textToCopy);
          }}
        >
          Copy
        </button>
      </div>
    );
  }
}
