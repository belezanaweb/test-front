import React from 'react';
import GlobalStyle from './styles/global';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { renderWithTheme } from './utils/helpers';

const Basket = React.lazy(() => import ('./pages/basket'));
const Payment = React.lazy(() => import ('./pages/payment'));
const Confirmation = React.lazy(() => import ('./pages/confirmation'));

const GlobalStyleProxy: any = GlobalStyle;
const App: React.FC = () => (
  <>
    {
        renderWithTheme(
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Basket />} />
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/confirmation" element={<Confirmation />} />
                    </Routes>
                </BrowserRouter>
                <GlobalStyleProxy />
            </>
        )
    }
  </>
);

export default App;