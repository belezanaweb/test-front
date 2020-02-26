import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Strict = () => (
  <StrictMode>
    <App></App>
  </StrictMode>
);

ReactDOM.render(<Strict />, document.getElementById('root'));

serviceWorker.unregister();
