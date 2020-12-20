import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import App from '../shared/app';
import configureStore, { ReduxStore } from '../shared/store';

const store = configureStore({}, window.__REDUX_STATE__);
const render = module.hot ? ReactDOM.render : ReactDOM.hydrate;

function renderApp(reduxStore: ReduxStore): void {
  return render(
    <CookiesProvider>
      <Provider store={reduxStore}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </CookiesProvider>,
    document.getElementById('root')
  );
}

renderApp(store);

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept(['../shared/app', '../shared/routes', '../shared/store'], () => {
    renderApp(store);
  });
}
