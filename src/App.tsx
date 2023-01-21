import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./theme/globals";
import Theme from "./theme";
import Home from "./pages/commom/Home";
import Cart from "./pages/checkout/Cart";
import Payment from "./pages/checkout/Payment";
import Confirmation from "./pages/checkout/Confirmation";
import NotFound from "./pages/error/NotFound";

const router = createBrowserRouter([{
    path: "/",
    element: <Home />
  },{
    path: "/checkout/cart",
    element: <Cart />
  }, {
    path: "/checkout/payment",
    element: <Payment />
  }, {
    path: "/checkout/confirmation",
    element: <Confirmation />
  }, {
    path: '*',
    element: <NotFound />
  }
]);

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Theme>
  );
}

export default App;
