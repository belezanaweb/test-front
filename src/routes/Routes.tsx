import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carrinho from '../pages/cart/cart';
import Checkout from '../pages/checkout/checkout';
import ConfirmationOrder from '../pages/confimation/confimation';
import { PrivateRoute } from './PrivateRoute';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/checkout" element={<PrivateRoute emptyCart={true} />}>
                    <Route path="" element={<Checkout />} />
                </Route>
                <Route path="/checkout/confirmacao" element={<PrivateRoute emptyCart={true} />}>
                    <Route path="" element={<ConfirmationOrder />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
