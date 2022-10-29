import React from "react";
import "./App.css";
import { CartProvider } from "./contexts/cart";

const App = () => (
  <CartProvider>
    <div />
  </CartProvider>
);

export default App;
