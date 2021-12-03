import React from 'react'
import Routes from 'routes'
import { Provider } from 'react-redux'
import { store } from 'redux/store'

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App
