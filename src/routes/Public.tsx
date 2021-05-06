import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Loading } from "../components";

const Styleguide = React.lazy(() => import("../pages/Styleguide"));
const Cart = React.lazy(() => import("../pages/Cart"));
const Payment = React.lazy(() => import("../pages/Payment"));
const Confirmation = React.lazy(() => import("../pages/Confirmation"));

const Public = () => (
  <BrowserRouter basename="/">
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/confirmation" component={Confirmation} />
        <Route path="/" component={Styleguide} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default React.memo(Public);
