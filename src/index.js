import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './containers/App';

const stepReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_STEP':
      return {
        ...state,
        step: action.step
      }
    default:
      return state
  }
}

const store = createStore(
  stepReducer
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
