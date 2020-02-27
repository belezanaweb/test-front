import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { Button } from './components';
import './index.css';
import theme from './styles/theme';
import * as serviceWorker from './service-worker';

const Strict = () => (
  <StrictMode>
    <Normalize />
    <ThemeProvider theme={theme}>
      <Button>seguir para o pagamento</Button>
    </ThemeProvider>
  </StrictMode>
);

ReactDOM.render(<Strict />, document.getElementById('root'));

serviceWorker.unregister();
