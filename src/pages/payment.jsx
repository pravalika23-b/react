import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./payment.css";

function Payment() {
  const { cartItems, clearCart } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const gst = subtotal * 0.05; // 5% GST
  const discount = subtotal > 500 ? 50 : 0; // flat ₹50 off above ₹500
  const total = subtotal + gst - discount;

  const handlePayment = () => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const restaurantName = localStorage.getItem("currentRestaurant");

    const newOrder = {
      id: Date.now(),
      restaurant: restaurantName,
      items: cartItems,
      total,
      date: new Date().toLocaleString(),
    };

    localStorage.setItem("orders", JSON.stringify([...orders, newOrder]));
    clearCart();
    alert("Payment successful 🎉");
  };

  return (
    <div className="payment-page">
      <div className="payment-card">
        <h1>Payment Summary</h1>

        {cartItems.length === 0 ? (
          <p className="empty-text">No items in cart</p>
        ) : (
          <>
            <div className="bill-row">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <div className="bill-row">
              <span>GST (5%)</span>
              <span>₹{gst.toFixed(2)}</span>
            </div>

            {discount > 0 && (
              <div className="bill-row discount">
                <span>Discount</span>
                <span>- ₹{discount}</span>
              </div>
            )}

            <hr />

            <div className="bill-total">
              <span>Total Payable</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            <button className="pay-btn" onClick={handlePayment}>
              Pay ₹{total.toFixed(0)}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Payment;