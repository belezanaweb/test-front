import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { useCart } from "../contexts/cart";
import Tooltip from "@mui/material/Tooltip";
import { Container, DisabledLink, Link, Loading, Tabs } from "./styles";

const Payment = React.lazy(() => import("../pages/Payment"));
const ShoppingCart = React.lazy(() => import("../pages/ShoppingCart"));
const SucessfulPurchase = React.lazy(
  () => import("../pages/SucessfulPurchase")
);

export const RoutesList = () => {
  const { cart } = useCart();
  const params = useLocation();

  const routes = [
    {
      name: "SACOLA",
      path: "/shoppingCart",
      component: <ShoppingCart />,
      shouldAccess:
        !cart.paymentData?.creditCardNumber && !cart.paymentData?.ownerName,
    },
    {
      name: "PAGAMENTO",
      path: "/payment",
      component: <Payment />,
      shouldAccess:
        !cart.paymentData?.creditCardNumber && !cart.paymentData?.ownerName,
    },
    {
      name: "CONFIRMAÇÃO",
      path: "/sucessfullPurchase",
      component: <SucessfulPurchase />,
      shouldAccess: Boolean(
        cart.paymentData?.creditCardNumber && cart.paymentData?.ownerName
      ),
    },
  ];

  return (
    <>
      <Tabs>
        {routes.map((route) =>
          !route.shouldAccess ? (
            <Tooltip
              key={route.path}
              title={
                route.name === "CONFIRMAÇÃO"
                  ? "Preencha os dados de pagamento antes."
                  : "Compra já foi finalizada."
              }
            >
              <DisabledLink>{route.name}</DisabledLink>
            </Tooltip>
          ) : (
            <Link
              key={route.path}
              selected={params.pathname.includes(route.path)}
              to={route.path}
              disabled={!route.shouldAccess}
            >
              {route.name}
            </Link>
          )
        )}
      </Tabs>
      <Container>
        <Suspense fallback={<Loading />}>
          <Routes>
            {routes.map(
              (route) =>
                route.shouldAccess && (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.component}
                  />
                )
            )}
          </Routes>
        </Suspense>
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
