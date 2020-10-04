import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import React, { Suspense, lazy } from 'react';

import Loading from '../components/Loading'
const SplashScreen = lazy(() => import('../pages/SplashScreen'));

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route exact path="/" component={SplashScreen}>
                    </Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}
export default Router;