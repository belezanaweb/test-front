import React from 'react'
import { Checkout } from './containers/checkout'
import { Provider } from 'react-redux'
import { store } from './store/index'

const App = () => (
  <Provider store={store}>
    <Checkout />
  </Provider>
)

export { App }
