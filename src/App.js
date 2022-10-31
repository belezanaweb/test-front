import React from "react";
import "./App.css";
import { CartProvider } from "./contexts/cart";
import { DeviceSizeProvider } from "./contexts/deviceSize";
import { ErrorProvider } from "./contexts/error";
import Routes from "./routes";

const App = () => (
  <DeviceSizeProvider>
    <ErrorProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
    </ErrorProvider>
  </DeviceSizeProvider>
);

export default App;
