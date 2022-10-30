import React from "react";
import "./App.css";
import { CartProvider } from "./contexts/cart";
import { DeviceSizeProvider } from "./contexts/deviceSize";
import Payment from "./pages/Payment";

const App = () => (
  <DeviceSizeProvider>
    <CartProvider>
      <Payment />
    </CartProvider>
  </DeviceSizeProvider>
);

export default App;
