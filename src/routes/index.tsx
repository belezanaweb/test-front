import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { Container, Link, Loading, Tabs } from "./styles";

const Payment = React.lazy(() => import("../pages/Payment"));
const ShoppingCart = React.lazy(() => import("../pages/ShoppingCart"));
const SucessfulPurchase = React.lazy(
  () => import("../pages/SucessfulPurchase")
);

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
        <Suspense fallback={<Loading />}>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              />
            ))}
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
