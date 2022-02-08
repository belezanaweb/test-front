import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './config/ReactotronConfig';
import AppProvider from './providers/AppProvider';

import GlobalStyle from './styles/global';

function App() {
  console.info(`==> 🌎  Você está no modo ${process.env.NODE_ENV}`);
  console.info(`==> 🌎  Você está no ambiente ${process.env.REACT_APP_ENVIRONMENT}`);

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/*" element={} />
          <Route path="/dashboard/*" element={} /> */}
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </AppProvider>
  );
}

export default App;
