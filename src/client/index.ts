import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import { configureStore } from '../shared/store'
import App from '../shared/app'
import createHistory from '../shared/store/history'

const history = createHistory()

const store =
  window.store ||
  configureStore({
    initialState: window.__PRELOADED_STATE__
  })

hydrate(
  <Provider store={store}>
    <Router history={history}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Router>
  </Provider>,
  document.getElementById('app')
)

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept()
  }

  if (!window.store) {
    window.store = store
  }
}
