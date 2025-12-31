import { useParams } from "react-router-dom";
import { useEffect } from "react";
import FoodItem from "../components/FoodItem";
import { restaurants } from "../Data/restaurantsData";

function Restaurant() {
  const { id } = useParams();
  const restaurant = restaurants[id];

  useEffect(() => {
    if (restaurant) {
      localStorage.setItem("currentRestaurant", restaurant.name);
    }
  }, [restaurant]);

  if (!restaurant) {
    return <p>No menu available</p>;
  }

  return (
    <div className="menu-page">
      <h1 className="menu-title">{restaurant.name}</h1>

      <div className="menu-list">
        {restaurant.menu.map((item, i) => (
          <FoodItem key={i} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
}

export default Restaurant;

