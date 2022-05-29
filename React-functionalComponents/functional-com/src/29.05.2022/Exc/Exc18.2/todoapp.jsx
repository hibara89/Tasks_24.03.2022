import React, { useState } from "react";

const TodoApp = () => {
  const [toDoList, setToDoList] = useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ]);

  const handlerCompleted = (index) => {
    const newState = [...toDoList];
    newState[index].completed = !newState[index].completed;
    setToDoList(newState);
  };

  const renderedTodo = toDoList.map((item, index) => {
    return (
      <div>
        {item.completed ? <del>{item.name}</del> : item.name}
        <span
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => handlerCompleted(index)}
        >
          {item.completed ? "V" : "X"}
        </span>
      </div>
    );
  });
  return <div>{renderedTodo}</div>;
};

export default TodoApp;
