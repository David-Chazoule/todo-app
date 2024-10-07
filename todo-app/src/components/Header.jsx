import React from "react";
import sun from "../styles/images/icon-sun.svg";
import moon from "../styles/images/icon-moon.svg";
function Header({ light, setLight, todo, setTodo, addTodo }) {
  const handleTheme = () => {
    setLight(!light);
  };

  const handlePost = (e) => {
    e.preventDefault();
    addTodo();
    setTodo("");
  };

  return (
    <div className="header">
      <div className="title-box">
        <h1>TODO</h1>
        {light ? (
          <img src={moon} alt="logo-moon" onClick={handleTheme} />
        ) : (
          <img src={sun} alt="logo-sun" onClick={handleTheme} />
        )}
      </div>

      <form onSubmit={handlePost}>
        <span className={light ? "lightSpan" : "darkSpan"}>
          <span className="circle"></span>{" "}
          <input
            className={light ? "lightInput" : "darkInput"}
            type="text"
            value={todo}
            placeholder="Create a new todo..."
            onChange={(e) => setTodo(e.target.value)}
          />
        </span>
      </form>
    </div>
  );
}

export default Header;
