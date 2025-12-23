import FoodItem from "../components/FoodItem";

function Menu() {
  return (
    <div>
      <h1>Menu</h1>
      <hr />

      <FoodItem name="Pizza" price={199} />
      <FoodItem name="Burger" price={99} />
      <FoodItem name="Biryani" price={249} />
    </div>
  );
}

export default Menu;
