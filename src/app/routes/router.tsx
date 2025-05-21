import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import CheckoutPage from '../pages/checkout/checkout.page';

export function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<CheckoutPage />} />
      </Routes>
  );
}
