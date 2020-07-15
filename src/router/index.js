import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { connect } from "react-redux"
import { Switch, Route } from "react-router-dom";
import Cart from "../pages/cart"
import Payment from "../pages/payment"
import Success from "../pages/success"


export const routes = {
  cart: "/cart",
  payment: "/payment",
  success: "/success",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.cart} component={Cart} />
        <Route exact path={routes.payment} component={Payment} />
        <Route exact path={routes.success} component={Success} />
      </Switch>
    </ConnectedRouter>
  );
}

export default connect()(Router);
