import React from "react";
import Header from "./Header";
import TodoList from "./TodoList";

function Main() {
  return (
    <div className="main_container">
      <div className="header_container">
        <Header />
      </div>
      <div className="todolist_container">
        <TodoList />
      </div>
      <footer>
        <p>Drag and drop to rearder list</p>
      </footer>
    </div>
  );
}

export default Main;
