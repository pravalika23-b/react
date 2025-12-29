import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Payment() {
  const { cartItems, clearCart } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    alert("Payment successful ✅");
    clearCart();
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Payment</h1>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <p>Total Amount: ₹{total}</p>
          <button onClick={handlePayment}>
            Pay Now
          </button>
        </>
      )}
    </div>
  );
}

export default Payment;

