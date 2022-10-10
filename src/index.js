import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { ThemeProvider } from 'react-jss';

import App from './App';
import theme from './styles/theme';

import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

const Base = () => (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);

ReactDOM.render(<Base />, document.getElementById('root'));

serviceWorker.unregister();
