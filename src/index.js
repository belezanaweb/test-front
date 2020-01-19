import React from 'react';
import ReactDOM from 'react-dom';
import { store } from 'store/Redux';
import { Provider } from 'react-redux';

import * as serviceWorker from 'serviceWorker';

import 'utils/css/fonts.css';
import 'utils/css/global.css';
import 'utils/css/animate.css';

import App from 'App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
