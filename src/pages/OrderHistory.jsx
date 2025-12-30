import React from "react";
import "./OrderHistory.css";

const OrderHistory = () => {
  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="order-history">
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        orders.map((order) => (
          <div className="order-card" key={order.id}>
            <p><b>Date:</b> {order.date}</p>
            <p><b>Items:</b> {order.items.length}</p>
            <p><b>Total:</b> ₹ {order.total}</p>
            <p><b>Status:</b> Delivered</p>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
