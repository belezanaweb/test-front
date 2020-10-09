import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const Strict = () => (
  <StrictMode>
    <App />
  </StrictMode>
);

ReactDOM.render(<Strict />, document.getElementById('root'));
