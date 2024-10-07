import React, { useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";

function Main() {
  const [light, setLight] = useState(true);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() !== "") {
      const newTodo = {
        id: Date.now().toString(),
        text: todo,
        completed: false,
      };

      setTodos([...todos, newTodo]);

      setTodo("");
    }
  };

  return (
    <div className={`main_container ${light ? "lightMain" : "darkMain"}`}>
      <div
        className={`header_container ${light ? "lightHeader" : "darkHeader"}`}
      >
        <Header
          light={light}
          setLight={setLight}
          todo={todo}
          setTodo={setTodo}
          addTodo={addTodo}
        />
      </div>
      <div className="todolist_container">
        <TodoList light={light} todos={todos} setTodos={setTodos} />
      </div>
      <footer>
        <p>Drag and drop to rearder list</p>
      </footer>
    </div>
  );
}

export default Main;
