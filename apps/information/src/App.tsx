import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CartProvider from 'cart/CartProvider';

import CreditCardForm from './components/CreditCardForm';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<CreditCardForm />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
