import FoodItem from "../components/FoodItem";

function Menu() {
  return (
    <div>
      <h1>Menu</h1>
      <hr />

      <FoodItem name="Pizza" price={199} />
      <FoodItem name="Burger" price={99} />
      <FoodItem name="Biryani" price={249} />
import React, { useContext } from "react";
import FoodItem from "../components/FoodItem";
import "./menu.css";
import { SearchContext } from "../context/SearchContext";

function Menu() {
  const { searchTerm } = useContext(SearchContext);

  const matches = (name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase());

  return (
    <div className="menu-page">
      <h1 className="menu-title">Our Menu</h1>
      <p className="menu-subtitle">Fresh • Tasty • Affordable</p>
      <hr />

      {/* Pizzas */}
      <h2 className="menu-category">🍕 Pizzas</h2>
      <div className="menu-list">
        {matches("Margherita Pizza") && (
          <FoodItem name="Margherita Pizza" price={199} />
        )}
        {matches("Cheese Burst Pizza") && (
          <FoodItem name="Cheese Burst Pizza" price={249} />
        )}
        {matches("Pepperoni Pizza") && (
          <FoodItem name="Pepperoni Pizza" price={299} />
        )}
        {matches("Veg Supreme Pizza") && (
          <FoodItem name="Veg Supreme Pizza" price={279} />
        )}
      </div>

      {/* Burgers */}
      <h2 className="menu-category">🍔 Burgers</h2>
      <div className="menu-list">
        {matches("Classic Veg Burger") && (
          <FoodItem name="Classic Veg Burger" price={99} />
        )}
        {matches("Cheese Burger") && (
          <FoodItem name="Cheese Burger" price={129} />
        )}
        {matches("Chicken Burger") && (
          <FoodItem name="Chicken Burger" price={159} />
        )}
        {matches("Double Patty Burger") && (
          <FoodItem name="Double Patty Burger" price={189} />
        )}
      </div>

      {/* Indian */}
      <h2 className="menu-category">🍛 Indian Specials</h2>
      <div className="menu-list">
        {matches("Veg Biryani") && (
          <FoodItem name="Veg Biryani" price={199} />
        )}
        {matches("Chicken Biryani") && (
          <FoodItem name="Chicken Biryani" price={249} />
        )}
        {matches("Paneer Butter Masala") && (
          <FoodItem name="Paneer Butter Masala" price={219} />
        )}
        {matches("Butter Chicken") && (
          <FoodItem name="Butter Chicken" price={279} />
        )}
      </div>

      {/* Snacks */}
      <h2 className="menu-category">🍟 Snacks</h2>
      <div className="menu-list">
        {matches("French Fries") && (
          <FoodItem name="French Fries" price={79} />
        )}
        {matches("Cheese Fries") && (
          <FoodItem name="Cheese Fries" price={109} />
        )}
        {matches("Chicken Nuggets") && (
          <FoodItem name="Chicken Nuggets" price={149} />
        )}
        {matches("Veg Momos") && (
          <FoodItem name="Veg Momos" price={99} />
        )}
      </div>

      {/* Drinks */}
      <h2 className="menu-category">🥤 Drinks</h2>
      <div className="menu-list">
        {matches("Coke") && <FoodItem name="Coke" price={49} />}
        {matches("Pepsi") && <FoodItem name="Pepsi" price={49} />}
        {matches("Cold Coffee") && (
          <FoodItem name="Cold Coffee" price={89} />
        )}
        {matches("Milk Shake") && (
          <FoodItem name="Milk Shake" price={129} />
        )}
      </div>
    </div>
  );
}

export default Menu;
