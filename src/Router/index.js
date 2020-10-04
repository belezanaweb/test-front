import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import React, { Suspense, lazy } from 'react';

import Loading from '../components/Loading'
import { ContainerContent } from '../App'

const SplashScreen = lazy(() => import('../pages/SplashScreen'));
const Cart = lazy(() => import('../pages/Cart'));

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<ContainerContent><Loading /></ContainerContent>}>
                <Switch>
                    <Route exact path="/" component={SplashScreen}>
                    </Route>
                    <Route exact path="/cart" component={Cart}>
                    </Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}
export default Router;