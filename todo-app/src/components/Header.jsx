import React from "react";
import sun from "../styles/images/icon-sun.svg";

function Header() {
  return (
    <div className="header">
      <div className="title-box">
        <h1>TODO</h1>
        <img src={sun} alt="" />
      </div>

      <form>
        <input type="text" />
      </form>
    </div>
  );
}

export default Header;
