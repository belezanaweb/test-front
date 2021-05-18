import React from 'react'
import Routes from './routes'
import Global from './styles/global'
import { Provider } from 'react-redux'
import store from './store'

const App = () => (
  <Provider store={store}>
    <Global />
    <Routes />
  </Provider>
)

export default App
