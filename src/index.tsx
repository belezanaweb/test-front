import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Confirmation from './pages/Confirmation';
import Item from './pages/Item';

const rootElement = document.getElementById('root');

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="cart" element={<Cart />}>
          <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":productSku" element={<Item />} />
        </Route>
        <Route path="payment" element={<Payment />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>Theres nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
