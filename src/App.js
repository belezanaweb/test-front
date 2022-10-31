import React from "react";
import "./App.css";
import { CartProvider } from "./contexts/cart";
import { DeviceSizeProvider } from "./contexts/deviceSize";
import { ErrorProvider } from "./contexts/error";
import Routes from "./routes";
import { SkeletonTheme } from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

const App = () => (
  <SkeletonTheme baseColor="#ccc" highlightColor="#eee">
    <DeviceSizeProvider>
      <ErrorProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </ErrorProvider>
    </DeviceSizeProvider>
  </SkeletonTheme>
);

export default App;
