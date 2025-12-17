import { useState } from "react";

function FoodItem({ name, price }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    alert(`${quantity} x ${name} added to cart. Total: ₹${price * quantity}`);
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>

      {/* Quantity selector */}
      <div>
        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>

      <p>Total: ₹{price * quantity}</p>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default FoodItem;
