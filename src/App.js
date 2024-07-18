import React from "react";
import Todoform from "./Todoform";
import Todos from "./Todos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "learn guitar", completed: false },
    { id: 2, title: "learn react", completed: false },
    { id: 3, title: "learn sql", completed: true },
  ]);

  function addTodo(newTodo) {
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  }
  function removeTodo(id) {
    setTodos((prev) => {
      return prev.filter((todo) => {
        if (todo.id !== id) return todo;
      });
    });
  }
  const toggleState = (id) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) return { ...todo, completed: !todo.completed };
        else return todo;
      });
    });
  };
  return (
    <div className="container">
      <ToastContainer />
      <h1 className="main-title">Todo List</h1>
      <Todoform addTodo={addTodo} />
      <Todos
        todos={todos}
        toggleState={toggleState}
        removeTodo={removeTodo}
      ></Todos>
    </div>
  );
}

export default App;
