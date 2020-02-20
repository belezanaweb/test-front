import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import LoadingText from '../components/Loading';

const Loading = () => <LoadingText />;

const AsyncCart = Loadable({
    loader: () => import('../pages/Cart'),
    loading: Loading,
});
const AsyncPayment = Loadable({
    loader: () => import('../pages/Payment'),
    loading: Loading,
});
const AsyncSuccess = Loadable({
    loader: () => import('../pages/Success'),
    loading: Loading,
});

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={AsyncCart} />
            <Route path="/payment" exact component={AsyncPayment} />
            <Route path="/success" exact component={AsyncSuccess} />
        </Switch>
    </BrowserRouter>
);