import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import CartPage from "../components/CartPage";
import PaymentPage from "../components/PaymentPage";
import SuccessPage from "../components/SuccessPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/cart">
                    <CartPage />
                </Route>
                <Route exact path="/payment">
                    <PaymentPage />
                </Route>
                <Route exact path="/success">
                    <SuccessPage />
                </Route>
            </Switch>
        </BrowserRouter>

    )
}

export default Router;