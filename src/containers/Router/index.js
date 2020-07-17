import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import CartPage from "../Cart";

export const routes = {
  root: "/"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
         <Route exact path={routes.root} component={CartPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
