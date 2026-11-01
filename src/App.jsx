
import { Routes, Route } from "react-router-dom";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import Dresses from "./pages/Dresses";
import CoOrds from "./pages/CoOrds";
import Abayas from "./pages/Abayas";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";

import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections/dresses" element={<Dresses />} />
        <Route path="/collections/co-ords" element={<CoOrds />} />
        <Route path="/collections/abayas" element={<Abayas />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/collections/:season" element={<Collection />} />
        <Route
          path="/order-confirmation"
          element={<OrderConfirmation />}
        />
      </Routes>
    </CartProvider>
  );
}

export default App;