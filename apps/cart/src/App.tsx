import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import { ListProducts } from './components/ListProducts';
import { CreditCardForm } from './components/CreditCardForm';
import { PaymentInformation } from './components/PaymentInformation';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="cart" element={<ListProducts />} />
          <Route path="payment" element={<CreditCardForm />} />
          <Route path="information" element={<PaymentInformation />} />
        </Route>

        <Route path="/" element={<Navigate to="/cart" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
