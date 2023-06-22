import React, { useState } from "react";
import "./App.css";
import BurgerMenu from "./BurgerMenu";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPizzas, setShowPizzas] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const togglePizzas = () => {
    setShowPizzas(!showPizzas);
  };

  return (
    <div className="app">
      <nav>
        <div className="logo">Logo</div>
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li onClick={togglePizzas}>Burger</li>
          </ul>
        </div>
        <div
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
      <div className="content">
        <h1>Welcome to the Burger Pitshop</h1>
        <p>This is a sample homepage with a burger menu.</p>
        {showPizzas && (
          <div className="pizza-content">
            {/* Render your pizza content here */}
            <h2>Burger Menu</h2>
            <ul>
              <li>Chicken Burger</li>
              <li>Margherita Burger</li>
              <li>Hawaiian Burger</li>
              {/* Add more pizza options */}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
