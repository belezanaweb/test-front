import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import Theme from "./theme";
import Cart from "./containers/Cart";
import Payment from "./containers/Payment";
import Success from './containers/Success';


const Router = () => {
    return (
        <MuiThemeProvider theme={Theme}>
            <CssBaseline />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Cart />
                    </Route>
                    <Route exact path="/payment">
                        <Payment />
                    </Route>
                    <Route exact path="/success">
                        <Success />
                    </Route>
                    <Route path="/">
                        <div>
                            <h4>Opa! 404!</h4>
                        </div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Router />, rootElement);

