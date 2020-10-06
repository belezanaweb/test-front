import React from "react";
import { Switch, Route, BrowserRouter} from "react-router-dom";
import HomePage from "../HomePage";
import BagPage from "../BagPage";
import PaymentPage from "../PaymentPage";
import ConfirmPage from "../ConfirmPage";

const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/">
          <HomePage/>
        </Route>

        <Route exact path="/bag">
          <BagPage/>
        </Route>

        <Route exact path="/payment">
          <PaymentPage/>
        </Route>

        <Route exact path="/confirm">
          <ConfirmPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router