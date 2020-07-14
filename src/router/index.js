import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";


export const routes = {
  
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
       
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
