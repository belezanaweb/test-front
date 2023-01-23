import React from 'react';
import GlobalStyle from './styles/global';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Theme from './theme';
import { ThemeProvider} from "styled-components";

const Basket = React.lazy(() => import ('./pages/basket'));
const Payment = React.lazy(() => import ('./pages/payment'));
const Confirmation = React.lazy(() => import ('./pages/confirmation'));

const GlobalStyleProxy: any = GlobalStyle;
const App: React.FC = () => (
  <>
    {/* @ts-ignore */}
    <ThemeProvider theme={Theme}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<React.Suspense><Basket /></React.Suspense>} />
                <Route path="/payment" element={<React.Suspense><Payment /></React.Suspense>} />
                <Route path="/confirmation" element={<React.Suspense><Confirmation /></React.Suspense>} />
            </Routes>
        </BrowserRouter>
        <GlobalStyleProxy />
      </ThemeProvider>
  </>
);

export default App;