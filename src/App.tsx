import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './config/ReactotronConfig';
import AppProvider from './providers/AppProvider';

import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Confirmation from './pages/Confirmation';

import GlobalStyle from './styles/global';

function App() {
  console.info(`==> 🌎  Você está no modo ${process.env.NODE_ENV}`);
  console.info(`==> 🌎  Você está no ambiente ${process.env.REACT_APP_ENVIRONMENT}`);

  return (
    <AppProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/*" element={<Cart />} />
            <Route path="/Payment/*" element={<Payment />} />
            <Route path="/confirmation/*" element={<Confirmation />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <GlobalStyle />
    </AppProvider>
  );
}

export default App;
