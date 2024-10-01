import React, { useState } from "react";
import cross from "../styles/images/icon-cross.svg";

function TodoList({ light, todos, setTodos }) {
  const [filter, setFilter] = useState("all");

  const removeTodo = (toDoRemove) => {
    setTodos(todos.filter((todo) => todo.text !== toDoRemove.text));
  };

  const toggleComplete = (todo) => {
    setTodos(
      todos.map((t) =>
        t.text === todo.text ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const removeCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  console.log(todos, "todos");
  return (
    <url className={`todolist-box ${light ? "lightTodolist" : "darkTodolist"}`}>
      {filteredTodos.map((item, key) => (
        <li className="todo-box" key={key}>
          <span className="todo">
            <input
              type="checkbox"
              className="checker"
              checked={item.completed}
              onChange={() => toggleComplete(item)}
            />
            <p
              className={light ? "light" : "dark"}
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.text}
            </p>
          </span>
          <img
            className="cross"
            src={cross}
            alt="cross-logo"
            onClick={() => removeTodo(item)}
          />
        </li>
      ))}

      <div className="filter_container">
        <p className="items">
          {todos.length <= 0
            ? " 0 item left"
            : todos.length === 1
            ? "1 item left"
            : todos.length + " items left"}{" "}
        </p>

        <span className="filter-type">
          <p onClick={() => setFilter("all")}>All</p>
          <p onClick={() => setFilter("active")}>Active</p>
          <p onClick={() => setFilter("completed")}>Completed</p>
        </span>

        <p className="clear" onClick={removeCompleted}>
          Clear completed
        </p>
      </div>
    </url>
  );
}

export default TodoList;
