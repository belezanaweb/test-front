import React from "react";
import "./App.css";
import { CartProvider } from "./contexts/cart";
import { DeviceSizeProvider } from "./contexts/deviceSize";
import ShoppingCart from "./pages/ShoppingCart";

const App = () => (
  <DeviceSizeProvider>
    <CartProvider>
      <ShoppingCart />
    </CartProvider>
  </DeviceSizeProvider>
);

export default App;
