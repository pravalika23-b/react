import React from "react";
import "./cart.css";

function Cart({ cartItems }) {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.name}>
              <h3>{item.name}</h3>
              <p>₹{item.price} × {item.quantity}</p>
              <p>Total: ₹{item.price * item.quantity}</p>
            </div>
          ))}

          <h2 className="cart-total">Total: ₹{totalPrice}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;
