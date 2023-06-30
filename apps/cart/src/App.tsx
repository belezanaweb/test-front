import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import CartProvider from 'cart/CartProvider';

import CreditCardFormFederated from './components/CreditCardFormFederated';
import Layout from './components/Layout';
import ListProducts from './components/ListProducts';
import PaymentInformationFederated from './components/PaymentInformationFederated';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route path="cart" element={<ListProducts />} />
            <Route path="payment" element={<CreditCardFormFederated />} />
            <Route
              path="information"
              element={<PaymentInformationFederated />}
            />
          </Route>

          <Route path="/" element={<Navigate to="/cart" replace />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
