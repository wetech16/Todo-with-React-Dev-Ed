import React from "react";
import Todo from "./Todo";

function TodoList() {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
            <Todo />
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
