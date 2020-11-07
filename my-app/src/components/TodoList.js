import React from "react";
import { useAuth } from "../AuthContext";
import Todo from "./Todo";

function TodoList() {
  const { filterTodos } = useAuth();
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filterTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
