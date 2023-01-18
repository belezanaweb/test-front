import React from 'react';
import GlobalStyle from './styles/global';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Checkout from './pages/checkout';

const GlobalStyleProxy: any = GlobalStyle;
const App: React.FC = () => (
  <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Checkout />} />
        </Routes>
    </BrowserRouter>
    <GlobalStyleProxy />
  </>
);

export default App;