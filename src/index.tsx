import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Root from './containers/root';
import configureStore from './store/configureStore';

import './index.css';

const store = configureStore();

ReactDOM.render(
  <Router>
    <Root store={store} />
  </Router>
, document.getElementById('root'));
