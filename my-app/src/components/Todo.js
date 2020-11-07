import React from "react";
import { useAuth } from "../AuthContext";

function Todo({ todo }) {
  const { completeHandler, deleteHandler } = useAuth();
  return (
    <div className="todo">
      <li
        className={`todo-item ${todo.completed ? "completed" : ""} `}
      >
        {todo.text}
      </li>
      <button
        onClick={() => completeHandler(todo.id)}
        className="complete-btn"
      >
        <i className="fas fa-check"></i>
      </button>
      <button
        onClick={() => deleteHandler(todo.id)}
        className="trash-btn"
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
