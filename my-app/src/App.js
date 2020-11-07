import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <header>
          <h1> Ed's Todo List </h1>
        </header>
        <Form />
        <TodoList />
      </AuthProvider>
    </div>
  );
}

export default App;
