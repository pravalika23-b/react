import React from "react";
import FoodItem from "../component/FoodItem";
import "./menu.css";

function Menu({ addToCart }) {
  const menuItems = [
    { name: "Spicy Chicken Burger", price: 150 },
    { name: "Veggie Pizza", price: 250 },
    { name: "Chocolate Cake", price: 120 },
  ];

  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <div className="menu-items-grid">
        {menuItems.map((item) => (
          <FoodItem
            key={item.name}
            name={item.name}
            price={item.price}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
