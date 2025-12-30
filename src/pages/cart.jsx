import React from "react";
import "./cart.css";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems = [], setCartItems }) 
 {
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      items: cartItems,
      total: totalPrice,
      date: new Date().toLocaleString(),
    };

    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, newOrder])
    );

    setCartItems([]); // clear cart
    navigate("/order-success");
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty 🛒</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.name}>
              <h3>{item.name}</h3>
              <p>
                ₹{item.price} × {item.quantity}
              </p>
              <p>
                <b>Total:</b> ₹{item.price * item.quantity}
              </p>
            </div>
          ))}

          <h2 className="cart-total">Grand Total: ₹{totalPrice}</h2>

          <button className="place-order-btn" onClick={placeOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
