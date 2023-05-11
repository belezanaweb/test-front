import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from '../pages/cart/cart';
import Checkout from '../pages/checkout/checkout';
import ConfirmationOrder from '../pages/confimation/confimation';
import { PrivateRoute } from './PrivateRoute';
import TrackingStep from '../components/tracking-step/tracking-step';
import { AppContainer } from '../stitches.config';

const Router = () => {
    return (
        <BrowserRouter>
            <TrackingStep />
            <AppContainer>
                <Routes>
                    <Route path="/carrinho" element={<Cart />} />
                    <Route path="/checkout" element={<PrivateRoute emptyCart={false} />}>
                        <Route path="" element={<Checkout />} />
                    </Route>
                    <Route path="/confirmacao" element={<PrivateRoute emptyCart={false} />}>
                        <Route path="" element={<ConfirmationOrder />} />
                    </Route>
                </Routes>
            </AppContainer>
        </BrowserRouter>
    );
};

export default Router;
