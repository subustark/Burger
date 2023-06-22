import React, { useState } from "react";
import "./App.css";
import TopBar from "./TopBar";
import BurgerMenu from "./BurgerMenu";

const App = () => {
  const [showPizzas, setShowPizzas] = useState(false);

  const togglePizzas = () => {
    setShowPizzas(!showPizzas);
  };

  const burgerData = [
    { id: 1, name: "Chicken Burger", price: 8.99 },
    { id: 2, name: "Margherita Burger", price: 7.99 },
    { id: 3, name: "Hawaiian Burger", price: 9.99 },
    { id: 4, name: "Veggie Burger", price: 6.99 },
    { id: 5, name: "BBQ Bacon Burger", price: 10.99 },
    { id: 6, name: "Mushroom Swiss Burger", price: 8.99 },
    { id: 7, name: "Cheeseburger Deluxe", price: 9.99 },
    { id: 8, name: "Spicy Jalapeno Burger", price: 8.99 },
    { id: 9, name: "Double Cheeseburger", price: 11.99 },
    { id: 10, name: "Bacon Avocado Burger", price: 10.99 },
  ];

  return (
    <div className="app">
      <TopBar togglePizzas={togglePizzas} />
      <div className="content">
        <h1>Welcome to the Burger Pitshop</h1>
        <p>This is a sample homepage with a burger menu.</p>
        {showPizzas && <BurgerMenu burgerData={burgerData} />}
      </div>
    </div>
  );
};

export default App;
