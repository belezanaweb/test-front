import React from "react";
import "./App.css";
import { CartProvider } from "./contexts/cart";
import { DeviceSizeProvider } from "./contexts/deviceSize";
import Routes from "./routes";

const App = () => (
  <DeviceSizeProvider>
    <CartProvider>
      <Routes />
    </CartProvider>
  </DeviceSizeProvider>
);

export default App;
