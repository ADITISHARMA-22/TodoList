import React from "react";
import Todo from "./Todo";

function Todos({ todos, toggleState, removeTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          {...todo}
          key={todo.id}
          toggleState={toggleState}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

export default Todos;
