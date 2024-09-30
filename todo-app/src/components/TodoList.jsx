import React from "react";
import cross from "../styles/images/icon-cross.svg";

function TodoList({ light, todos, setTodos }) {
  return (
    <div className={`todolist-box ${light ? "lightTodolist" : "darkTodolist"}`}>
      {todos.map((item, key) => (
        <div className="todo-box">
          <span className="todo">
            <span className="circle"></span>
            <p key={key} className={light ? "light" : "dark"}>
              {item}
            </p>
          </span>
          <img className="cross" src={cross} alt="cross-logo" />
        </div>
      ))}

      <div className="filter_container">
        <p className="items">5 items left</p>

        <span className="filter-type">
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
        </span>

        <p className="clear">Clear completed</p>
      </div>
    </div>
  );
}

export default TodoList;
