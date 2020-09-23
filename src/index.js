import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import './index.css';
import App from './App';
import theme from './styles/theme';
import * as serviceWorker from './serviceWorker';

const Strict = () => (
  <StrictMode>
    <Normalize />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);

ReactDOM.render(<Strict />, document.getElementById('root'));

serviceWorker.unregister();
