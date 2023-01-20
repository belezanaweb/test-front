import React from 'react';
import GlobalStyle from './styles/global';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Basket from './pages/basket';
import Payment from './pages/payment';
import Confirmation from './pages/confirmation';
import Theme from './theme';
import { ThemeProvider} from "styled-components";


const GlobalStyleProxy: any = GlobalStyle;
const App: React.FC = () => (
  <>
    {/* @ts-ignore */}
    <ThemeProvider theme={Theme}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Basket />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
        </BrowserRouter>
        <GlobalStyleProxy />
      </ThemeProvider>
  </>
);

export default App;