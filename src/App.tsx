import React from 'react';
import GlobalStyle from './styles/global';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Basket from './pages/basket';

const GlobalStyleProxy: any = GlobalStyle;
const App: React.FC = () => (
  <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Basket />} />
        </Routes>
    </BrowserRouter>
    <GlobalStyleProxy />
  </>
);

export default App;