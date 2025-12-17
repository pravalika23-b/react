import { useState } from "react";
import "./FoodItem.css";

function FoodItem({ name, price, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [clicked, setClicked] = useState(false);

  const handleAdd = () => {
    setClicked(true);
    addToCart({ name, price, quantity });

    setTimeout(() => setClicked(false), 400);
  };

  return (
    <div className="food-card">
      <h3 className="food-name">{name}</h3>
      <p className="food-price">₹{price}</p>

      <div className="quantity-controls">
        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>−</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>

      <button
        className={`add-cart-btn ${clicked ? "sparkle" : ""}`}
        onClick={handleAdd}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default FoodItem;
