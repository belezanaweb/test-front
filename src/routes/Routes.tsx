import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from '../pages/cart/cart';
import Checkout from '../pages/checkout/checkout';
import ConfirmationOrder from '../pages/confimation/confimation';
import { PrivateRoute } from './PrivateRoute';
import TrackingStep from '../components/tracking-step/tracking-step';
import { AppContainer } from '../stitches.config';
import { useCart } from '../context/cart.context';
import { ConfirmationRoute } from './ConfirmationRoute';

const Router = () => {
    const { cart } = useCart();

    return (
        <BrowserRouter>
            <TrackingStep />
            <AppContainer>
                <Routes>
                    <Route index element={<Cart />} />
                    <Route path="/carrinho" element={<Cart />} />
                    <Route path="/checkout" element={<PrivateRoute emptyCart={!cart.items.length} />}>
                        <Route path="" element={<Checkout />} />
                    </Route>
                    <Route path="/confirmacao" element={<ConfirmationRoute />}>
                        <Route path="" element={<ConfirmationOrder />} />
                    </Route>
                </Routes>
            </AppContainer>
        </BrowserRouter>
    );
};

export default Router;
