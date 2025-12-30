import React from "react";
import "./Orders.css";

function Orders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="orders-page">
      <h1 className="orders-title">My Orders</h1>

      {orders.length === 0 ? (
        <p className="no-orders">No orders yet 🍽️</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className="order-card">
              <h3>Order on {order.date}</h3>

              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>
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
