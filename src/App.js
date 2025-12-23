import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/menu";
import Cart from "./pages/cart";
import Payment from "./pages/payment";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
