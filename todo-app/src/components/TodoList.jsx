import React, { useState } from "react";
import cross from "../styles/images/icon-cross.svg";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function TodoList({ light, todos, setTodos }) {
  const [filter, setFilter] = useState("all");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const [hoveredId, setHoveredId] = useState(null);

  // Function to remove a todo item from the list
  const removeTodo = (toDoRemove) => {
    setTodos(todos.filter((todo) => todo.text !== toDoRemove.text));
  };

  // Function to toggle the completion state of a todo item
  const toggleComplete = (todo) => {
    setTodos(
      todos.map((t) =>
        t.text === todo.text ? { ...t, completed: !t.completed } : t
      )
    ); // Update the todos array, toggling the 'completed' property of the matching todo
  };

  // Filter todos based on the selected filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed; // Return only active todos
    if (filter === "completed") return todo.completed; // Return only completed todos
    return true; // Return all todos if the filter is 'all'
  });

  // Function to remove all completed todos
  const removeCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Function to handle the click event on filter buttons
  const handlefilterClick = (newfilter) => {
    setFilter(newfilter);
    setSelectedFilter(newfilter);
  };

  const onDragEnd = (result) => {
    // Destructure 'source' and 'destination' from the result object provided by react-beautiful-dnd
    const { source, destination } = result;
    // If there's no destination (i.e., the item was dropped outside a valid droppable area), exit the function
    if (!destination) return;
    // Create a copy of the filteredTodos array to avoid directly mutating the state
    const newTodos = Array.from(filteredTodos);
    // Remove the todo item from its original position in the array
    const [movedTodo] = newTodos.splice(source.index, 1);
    // Insert the removed todo item into its new position at 'destination.index'
    newTodos.splice(destination.index, 0, movedTodo);
    // Update the state with the new reordered list of todos
    setTodos(newTodos);
  };

  return (
    <>
      <div
        className={`todolist-box ${light ? "lightTodolist" : "darkTodolist"}`}
      >
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="todosBox">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {filteredTodos.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <li
                        className={`todo-box ${light ? "" : "todo-boxDark"}`}
                        key={item.id}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                      >
                        <span className="todo">
                          <input
                            type="checkbox"
                            className={`checker ${light ? "" : "darkChecker"}`}
                            checked={item.completed}
                            onChange={() => toggleComplete(item)}
                          />
                          <p
                            className={`${light ? "light" : "dark"} ${
                              item.completed
                                ? light
                                  ? "completed-light"
                                  : "completed-dark"
                                : ""
                            }`}
                            style={{
                              textDecoration: item.completed
                                ? "line-through"
                                : "none",
                            }}
                            onClick={() => toggleComplete(item)}
                          >
                            {item.text}
                          </p>
                        </span>

                        {hoveredId === item.id && (
                          <img
                            className="cross"
                            src={cross}
                            alt="cross-logo"
                            onClick={() => removeTodo(item)}
                          />
                        )}
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        <div className="filter_container">
          <p className="items">
            {todos.length <= 0
              ? " 0 item left"
              : todos.length === 1
              ? "1 item left"
              : todos.length + " items left"}{" "}
          </p>

          <span className="filter-type">
            <button
              className={`${selectedFilter === "all" ? "selected" : ""} ${
                light ? "" : "btnDark"
              }`}
              onClick={() => handlefilterClick("all")}
            >
              All
            </button>
            <button
              className={`${selectedFilter === "active" ? "selected" : ""} ${
                light ? "" : "btnDark"
              }`}
              onClick={() => handlefilterClick("active")}
            >
              Active
            </button>
            <button
              className={`${selectedFilter === "completed" ? "selected" : ""} ${
                light ? "" : "btnDark"
              }`}
              onClick={() => handlefilterClick("completed")}
            >
              Completed
            </button>
          </span>

          <button className="clear" onClick={removeCompleted}>
            Clear completed
          </button>
        </div>

        <div className="filter_container-mobile">
          <div>
            <p className="items">
              {todos.length <= 0
                ? " 0 item left"
                : todos.length === 1
                ? "1 item left"
                : todos.length + " items left"}{" "}
            </p>

            <button className="clear" onClick={removeCompleted}>
              Clear completed
            </button>
          </div>
        </div>
      </div>
      <span
        className={`filter-type-mobile ${light ? "filterLight" : "filterDark"}`}
      >
        <button
          className={`${selectedFilter === "all" ? "selected" : ""} ${
            light ? "" : "btnDark"
          }`}
          onClick={() => handlefilterClick("all")}
        >
          All
        </button>
        <button
          className={`${selectedFilter === "active" ? "selected" : ""} ${
            light ? "" : "btnDark"
          }`}
          onClick={() => handlefilterClick("active")}
        >
          Active
        </button>
        <button
          className={`${selectedFilter === "completed" ? "selected" : ""} ${
            light ? "" : "btnDark"
          }`}
          onClick={() => handlefilterClick("completed")}
        >
          Completed
        </button>
      </span>
    </>
  );
}

export default TodoList;
