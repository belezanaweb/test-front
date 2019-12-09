import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


const App = lazy(() => import('./App.js'));
const Cart = lazy(() => import('./cart/Cart.js'));
const Payment = lazy(() => import('./cart/Payment.js'));
const Success = lazy(() => import('./cart/Success.js'));

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Suspense fallback={<div>Loading...</div>}>
                <Route path="/" exact={true} component={App} />
                <Route path="/cart" component={Cart} />
                <Route path="/payment" component={Payment} />
                <Route path="/success" component={Success} />
                <Redirect exact from="/" to="/cart" />
            </Suspense>
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
