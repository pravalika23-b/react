import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [popupMsg, setPopupMsg] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const applyCoupon = () => {
    let discountValue = 0;

    if (coupon === "SAVE50") {
      discountValue = 50;
      setPopupMsg("🎉 ₹50 discount applied successfully!");
    } else if (coupon === "FIRST10") {
      discountValue = totalPrice * 0.1;
      setPopupMsg("🎉 10% discount applied!");
    } else {
      setPopupMsg("❌ Invalid coupon code");
    }

    setDiscount(discountValue);
    setShowPopup(true);
  };

  const finalAmount = Math.max(totalPrice - discount, 0);

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

          {/* COUPON INPUT */}
          <div className="coupon-container">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value.toUpperCase())}
            />
            <button onClick={applyCoupon}>Apply</button>
          </div>

          <div className="cart-total">
            <p>Subtotal: ₹{totalPrice.toFixed(2)}</p>
            <p>Discount: ₹{discount.toFixed(2)}</p>
            <h3>Payable Amount: ₹{finalAmount.toFixed(2)}</h3>

            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>

            <Link to="/payment">
              <button className="clear-btn">Proceed to Payment</button>
            </Link>
          </div>
        </>
      )}

      {/* POPUP MODAL */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <p>{popupMsg}</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
