import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import Cart from "./components/Cart/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Payment from "./pages/payment";
import Restaurant from "./pages/Restaurant";

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
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
    
      </Routes>
      </SearchProvider>
      </CartProvider>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

