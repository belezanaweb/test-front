import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import './index.css';
import App from './app';
import theme from './styles/theme';
import * as serviceWorker from './service-worker';

const Strict = () => (
  <>
    <Normalize />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>
);

ReactDOM.render(<Strict />, document.getElementById('root'));

serviceWorker.unregister();
