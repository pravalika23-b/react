import React from "react";
import "./Orders.css";

function Orders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="orders-page">
      <h1 className="orders-title">My Orders</h1>

      {orders.length === 0 ? (
        <p className="orders-empty">No orders yet 🍽️</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div className="order-card" key={order.id}>
              <h3 className="restaurant-name">
                🍴 {order.restaurant || "Unknown Restaurant"}
              </h3>

              <p className="order-date">📅 {order.date}</p>

              <ul>
                {order.items.map((item, i) => (
                  <li key={i}>
                    {item.name} × {item.quantity}
                  </li>
                ))}
              </ul>

              <p className="order-total">Total: ₹{order.total}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
