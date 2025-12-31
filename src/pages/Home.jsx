import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const featuredRestaurants = [
  {
    id: 1,
    name: "Spice Hub",
    cuisine: "Indian • Biryani",
    rating: 4.5,
    image: "/images/item1.jpg",
  },
  {
    id: 2,
    name: "Pizza Palace",
    cuisine: "Italian • Pizza",
    rating: 4.3,
    image: "/images/item2.jpg",
  },
  {
    id: 3,
    name: "Burger Bros",
    cuisine: "American • Burgers",
    rating: 4.2,
    image: "/images/item3.jpg",
  },
];

const allRestaurants = [
  { id: 4, name: "Anjappar", cuisine: "South Indian", rating: 4.4 },
  { id: 5, name: "A2B", cuisine: "Veg • South Indian", rating: 4.3 },
  { id: 6, name: "BBQ Nation", cuisine: "BBQ • Grill", rating: 4.6 },
  { id: 7, name: "KFC", cuisine: "Fast Food • Chicken", rating: 4.1 },
  { id: 8, name: "Domino's", cuisine: "Pizza • Fast Food", rating: 4.0 },
  { id: 9, name: "Subway", cuisine: "Healthy • Sandwiches", rating: 4.2 },
  { id: 10, name: "Meghana Foods", cuisine: "Biryani • Andhra", rating: 4.7 },
];

function Home() {
  return (
    <div className="home-page">
      <h1 className="home-title">Restaurants Near You</h1>

      <div className="restaurant-grid">
        {featuredRestaurants.map((res) => (
          <Link
            to={`/restaurant/${res.id}`}
            key={res.id}
            className="restaurant-card"
          >
            <img src={res.image} alt={res.name} />
            <div className="restaurant-info">
              <h3>{res.name}</h3>
              <p className="cuisine">{res.cuisine}</p>
              <span className="rating">⭐ {res.rating}</span>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="section-title">All Restaurants</h2>

      <div className="all-restaurants">
        {allRestaurants.map((res) => (
          <Link
            to={`/restaurant/${res.id}`}
            key={res.id}
            className="restaurant-row"
          >
            <div>
              <h4>{res.name}</h4>
              <p>{res.cuisine}</p>
            </div>
            <span className="rating">⭐ {res.rating}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
