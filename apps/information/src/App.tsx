import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CartProvider from 'cart/CartProvider';

import PaymentInformation from './components/PaymentInformation';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<PaymentInformation />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
