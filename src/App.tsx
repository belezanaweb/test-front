import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

import CartList from './pages/CartList';
import CartPayment from './pages/CartPayment';
import CartConfirmation from './pages/CartConfirmation';

import AppProvider from './providers/AppProvider';

import GlobalStyle from './styles/global';
import { AppContainer } from './styles/styles';

function App() {
  console.info(`==> 🌎  Você está no modo ${process.env.NODE_ENV}`);
  console.info(`==> 🌎  Você está no ambiente ${process.env.REACT_APP_ENVIRONMENT}`);

  return (
    <AppContainer>
      <AppProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart/*" element={<Cart />}>
              <Route path="*" element={<CartList />} />
              <Route path="payment" element={<CartPayment />} />
              <Route path="confirmation" element={<CartConfirmation />} />
            </Route>
          </Routes>
        </BrowserRouter>

        <GlobalStyle />
      </AppProvider>
    </AppContainer>
  );
}

export default App;
