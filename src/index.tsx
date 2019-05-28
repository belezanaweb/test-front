import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import Root from './containers/root';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Router>
    <Root store={store} />
  </Router>
, document.getElementById('root'));
