import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CartPage from "../CartPage";
import PaymentMethodPage from "../PaymentMethodPage";
import ConfirmationPage from "../ConfirmationPage";
import GlobalStyle from "../../Style"

export default function App(){
  return(
    <>
      <GlobalStyle/>       
      <Router>
        <Switch>
          <Route path="/" exact>
            <CartPage/>
          </Route>
          <Route path="/payment" exact>
            <PaymentMethodPage/>
          </Route>
          <Route path="/confirmation" exact>
            <ConfirmationPage/>
          </Route>
        </Switch>
      </Router>
    </>
  ) 
}