import React, { useContext, useState, useEffect } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([
    { text: "", completed: false, id: Math.random() * 1000 },
  ]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  const filterHandler = (e) => {
    setStatus(e.target.value);
  };
  const deleteHandler = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };
  const completeHandler = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const value = {
    inputText,
    inputTextHandler,
    submitTodoHandler,
    filterHandler,
    completeHandler,
    deleteHandler,
    filterTodos,
  };
  //getLocalTodos
  useEffect(() => {
    const getLocalTodos = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoLocal);
      }
    };
    getLocalTodos();
  }, []);
  //FilterComplete
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilterTodos(
            todos.filter((todo) => todo.completed === true)
          );
          break;
        case "uncompleted":
          setFilterTodos(
            todos.filter((todo) => todo.completed === false)
          );
          break;
        default:
          setFilterTodos(todos);
          break;
      }
    };
    saveLocalTodos();
    filterHandler();
  }, [todos, status]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
