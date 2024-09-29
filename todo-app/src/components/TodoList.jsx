import React from "react";

function TodoList() {
  return (
    <div className="todolist-box">
      <span>
        <p>ranger ma chambre</p>
        <p>X</p>
      </span>

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
