import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import CartProvider from 'cart/CartProvider';

import CreditCardFormFederated from './components/CreditCardFormFederated';
import Layout from './components/Layout';
import ListProducts from './components/ListProducts';
import PaymentInformationFederated from './components/PaymentInformationFederated';
import routes from './constants/routes';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path={`${routes.home}*`} element={<Layout />}>
            <Route path={routes.cart} element={<ListProducts />} />
            <Route
              path={routes.payment}
              element={<CreditCardFormFederated />}
            />
            <Route
              path={routes.information}
              element={<PaymentInformationFederated />}
            />
          </Route>

          <Route
            path="/"
            element={<Navigate to={`/${routes.cart}`} replace />}
          />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
