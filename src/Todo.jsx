import React from "react";
import { ImCross } from "react-icons/im";
function Todo({ id, title, completed, toggleState, removeTodo }) {
  return (
    <div className="todo">
      <div className="todo-title">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            toggleState(id);
          }}
        />
        <p className={`${completed ? "completed" : ""}`}>{title}</p>
      </div>

      <div className="cross-btn" onClick={() => removeTodo(id)}>
        <ImCross />
      </div>
    </div>
  );
}

export default Todo;
