import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import { ListProducts } from './components/ListProducts';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="cart" element={<ListProducts />} />
          <Route path="payment" element={<h1>payment</h1>} />
          <Route path="information" element={<h1>information</h1>} />
        </Route>

        <Route path="/" element={<Navigate to="/cart" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
