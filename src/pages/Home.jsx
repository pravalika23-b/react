import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to GrafixUI</h1>
          <p>Delicious meals, fast delivery, and a seamless experience.</p>
          <Link to="/menu" className="cta-button">
            Explore Menu
          </Link>
        </div>
      </section>

      
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Fresh Ingredients</h3>
            <p>Only the freshest ingredients go into our dishes.</p>
          </div>
          <div className="feature-card">
            <h3>Fast Delivery</h3>
            <p>Get your orders delivered hot and on time.</p>
          </div>
          <div className="feature-card">
            <h3>Best Prices</h3>
            <p>Delicious meals without burning a hole in your pocket.</p>
          </div>
          
        </div>
      </section>
      <section className="menu-preview">
        <h2>Featured Items</h2>
        <div className="menu-items">
          <div className="menu-item">
            <img src="/images/item1.jpg" alt="Item 1" />
            <h4>Spicy Chicken Burger</h4>
            <p>120 $</p>
          </div>
          <div className="menu-item">
            <img src="/images/item2.jpg" alt="Item 2" />
            <h4>Veggie Delight Pizza</h4>
            <p>100 $</p>
          </div>
          <div className="menu-item">
            <img src="/images/item3.jpg" alt="Item 3" />
            <h4>Chocolate Lava Cake</h4>
            <p>40 $</p>
          </div>
        </div>
        <Link to="/menu" className="cta-button">
          View Full Menu
        </Link>
      </section>
    </div>
  );
};

export default Home;
