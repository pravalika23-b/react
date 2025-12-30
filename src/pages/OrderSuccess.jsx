import React from "react";
import { Link } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  return (
    <div className="order-success">
      <h1>Order Placed Successfully!</h1>
      <p>Your food is being prepared.</p>
      <p>Estimated delivery: <b>30–40 mins</b></p>

      <div className="success-actions">
        <Link to="/menu">Order More</Link>
        <Link to="/orders">View Order History</Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
