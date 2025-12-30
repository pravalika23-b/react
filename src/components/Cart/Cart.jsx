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

import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";


function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty 🛒</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <div>
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            Total: ₹{totalPrice.toFixed(2)}
            <br />
            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
            <br></br>
            <Link to="/payment">
  <button className="clear-btn">Proceed to Payment</button>
</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
