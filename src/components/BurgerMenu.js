import React from "react";

const BurgerMenu = ({ showPizzas, burgerData }) => {
  return (
    <div className="burger-menu">
      <h2>Burger Menu</h2>
      <ul>
        {burgerData.map((burger) => (
          <li key={burger.id}>{burger.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerMenu;
