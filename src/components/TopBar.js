import React from "react";

const TopBar = ({ togglePizzas }) => {
  return (
    <nav>
      <div className="logo">Logo</div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li onClick={togglePizzas}>Burger</li>
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
