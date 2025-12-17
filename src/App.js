import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/menu";
import Cart from "./pages/cart";

function App() {
  // Shared cart state
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to cart
  const addToCart = (item) => {
    const existing = cartItems.find((i) => i.name === item.name);
    if (existing) {
      setCartItems(
        cartItems.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + item.quantity } : i
        )
      );
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/menu"
          element={<Menu addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;