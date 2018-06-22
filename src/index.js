import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import cartApp from './reducers';

import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

let middleware = []

if(process.env.NODE_ENV !== 'production') {
  middleware = [createLogger()]
}

const store = createStore(
  cartApp,
  applyMiddleware(
    ...middleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
