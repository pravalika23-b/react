import React from "react";
import FoodItem from "../components/FoodItem";
import "./menu.css";

function Menu() {
  return (
    <div className="menu-page">
      <h1 className="menu-title">Our Menu</h1>
      <p className="menu-subtitle">Fresh • Tasty • Affordable</p>
      <hr />

      {/* Pizzas */}
      <h2 className="menu-category">🍕 Pizzas</h2>
      <div className="menu-list">
        <FoodItem name="Margherita Pizza" price={199} />
        <FoodItem name="Cheese Burst Pizza" price={249} />
        <FoodItem name="Pepperoni Pizza" price={299} />
        <FoodItem name="Veg Supreme Pizza" price={279} />
      </div>

      {/* Burgers */}
      <h2 className="menu-category">🍔 Burgers</h2>
      <div className="menu-list">
        <FoodItem name="Classic Veg Burger" price={99} />
        <FoodItem name="Cheese Burger" price={129} />
        <FoodItem name="Chicken Burger" price={159} />
        <FoodItem name="Double Patty Burger" price={189} />
      </div>

      {/* Indian */}
      <h2 className="menu-category">🍛 Indian Specials</h2>
      <div className="menu-list">
        <FoodItem name="Veg Biryani" price={199} />
        <FoodItem name="Chicken Biryani" price={249} />
        <FoodItem name="Paneer Butter Masala" price={219} />
        <FoodItem name="Butter Chicken" price={279} />
      </div>

      {/* Snacks */}
      <h2 className="menu-category">🍟 Snacks</h2>
      <div className="menu-list">
        <FoodItem name="French Fries" price={79} />
        <FoodItem name="Cheese Fries" price={109} />
        <FoodItem name="Chicken Nuggets" price={149} />
        <FoodItem name="Veg Momos" price={99} />
      </div>

      {/* Drinks */}
      <h2 className="menu-category">🥤 Drinks</h2>
      <div className="menu-list">
        <FoodItem name="Coke" price={49} />
        <FoodItem name="Pepsi" price={49} />
        <FoodItem name="Cold Coffee" price={89} />
        <FoodItem name="Milk Shake" price={129} />
      </div>
    </div>
  );
}

export default Menu;

