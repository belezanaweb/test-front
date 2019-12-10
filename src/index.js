import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {store, persistor} from './store/index.js';

const Cart = lazy(() => import('./cart/Cart.js'));
const Payment = lazy(() => import('./cart/Payment.js'));
const Success = lazy(() => import('./cart/Success.js'));

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Switch>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Route path='/' exact={true} component={Cart} />
                        <Route path='/payment' component={Payment} />
                        <Route path='/success' component={Success} />
                    </Suspense>
                </Switch>
            </ BrowserRouter>
        </PersistGate>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
