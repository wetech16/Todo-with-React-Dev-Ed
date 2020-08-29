import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos }) {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
        {todos.map( (todo) => (
            <Todo key={todo.id} text={todo.text} id={todo.id} setTodos={setTodos} todos={todos}/>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
