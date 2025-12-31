import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./FoodItem.css";

function FoodItem({ name, price, restaurant }) {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addToCart({
      id: Date.now(),
      name,
      price,
      quantity,
      restaurant,
    });
  };


  return (
    <div className="food-card">
      <h3>{name}</h3>
      <p>₹{price}</p>

      <div>
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>

      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}

export default FoodItem;

