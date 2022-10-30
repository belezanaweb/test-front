import React from "react";
import "./App.css";
import { CartProvider } from "./contexts/cart";
import { DeviceSizeProvider } from "./contexts/deviceSize";
import Payment from "./pages/Payment";
import SucessfulPurchase from "./pages/SucessfulPurchase";

const App = () => (
  <DeviceSizeProvider>
    <CartProvider>
      <SucessfulPurchase />
    </CartProvider>
  </DeviceSizeProvider>
);

export default App;
