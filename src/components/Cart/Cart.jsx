import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    totalPrice,
  } = useContext(CartContext);

  const navigate = useNavigate(); 

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>

              <button
                disabled={item.quantity === 1}
                onClick={() => decreaseQty(item.id)}
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button onClick={() => increaseQty(item.id)}>+</button>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{totalPrice}</h3>

          <button onClick={clearCart}>Clear Cart</button>

          {/* ✅ CONFIRM ORDER BUTTON */}
          <button
            className="confirm-btn"
            onClick={() => navigate("/track-order")}
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
