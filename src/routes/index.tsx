import React from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Payment from "../pages/Payment";
import ShoppingCart from "../pages/ShoppingCart";
import SucessfulPurchase from "../pages/SucessfulPurchase";
import { Container, Link, Tabs } from "./styles";

const RoutesList = () => {
  const params = useLocation();

  const routes = [
    { name: "SACOLA", path: "/shoppingCart", component: <ShoppingCart /> },
    { name: "PAGAMENTO", path: "/payment", component: <Payment /> },
    {
      name: "CONFIRMAÇÃO",
      path: "/sucessfullPurchase",
      component: <SucessfulPurchase />,
    },
  ];

  return (
    <>
      <Tabs>
        {routes.map((route) => (
          <Link
            key={route.path}
            selected={params.pathname.includes(route.path)}
            to={route.path}
          >
            {route.name}
          </Link>
        ))}
      </Tabs>
      <Container>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </Container>
    </>
  );
};

const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <RoutesList />
    </BrowserRouter>
  );
};

export default routes;
