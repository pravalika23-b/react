import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

import Cart from "./pages/Cart";
import OrderTracking from "./pages/OrderTracking";
import Cart from "./components/Cart/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Payment from "./pages/payment";

import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";



function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <SearchProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        
        <Route path="/track-order" element={<OrderTracking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      </SearchProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

