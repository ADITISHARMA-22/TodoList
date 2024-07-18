import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";

function Todoform({ addTodo }) {
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim().length === 0) {
      toast.error("Please fill Input", {
        autoClose: 2000,
      });
      return;
    }

    const newTodo = {
      title: title,
      completed: false,
      id: uuid(),
    };
    addTodo(newTodo);
    setTitle("");
  }
  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input
        className="todoForm__input"
        type="text"
        value={title}
        placeholder="add todo"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <button type="submit" className="todoForm__btn">
        Add
      </button>
    </form>
  );
}

export default Todoform;
