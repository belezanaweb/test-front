import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import CartPage from "../Cart";
import PaymentPage from "../Payment";
import ConfirmationShippingPage from "../Confirmation";

export const routes = {
  root: "/",
  payment: "/payment",
  confirmation: "/confirmation"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={CartPage} />
        <Route exact path={routes.payment} component={PaymentPage} />
        <Route exact path={routes.confirmation} component={ConfirmationShippingPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
