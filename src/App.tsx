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
                        <Route path="/" element={<React.Suspense><Basket /></React.Suspense>} />
                        <Route path="/payment" element={<React.Suspense><Payment /></React.Suspense>} />
                        <Route path="/confirmation" element={<React.Suspense><Confirmation /></React.Suspense>} />
                    </Routes>
                </BrowserRouter>
                <GlobalStyleProxy />
            </>
        )
    }
  </>
);

export default App;