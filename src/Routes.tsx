import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carrinho from './pages/cart/cart';
import Checkout from './pages/checkout/checkout';
import ConfirmationOrder from './pages/confimation/confimation';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/checkout/confirmacao" element={<ConfirmationOrder />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
