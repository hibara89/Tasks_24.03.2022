import React from "react";
import List from "./list";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = { input: "", items: [] };
  }

  onChangeHandler = (event) => {
    this.setState({ input: event.target.value });
  };

  onDeleteHandler = (index) => {
    const deleteTask = [...this.state.items];
    deleteTask.splice(index, 1);
    this.setState({
      items: deleteTask,
    });
  };

  onFormHndler = (event) => {
    event.preventDefault();
    this.setState({
      input: " ",
      items: [...this.state.items, this.state.input],
    });
    console.log(this.state.input);
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <input
              type="text"
              value={this.state.input}
              placeholder="ToDOItem"
              onChange={this.onChangeHandler}
            />
            <button onClick={this.onFormHndler}>Add Item</button>
          </div>
        </form>

        <List deleteTask={this.onDeleteHandler} items={this.state.items} />
      </div>
    );
  }
}

export default TodoList;
