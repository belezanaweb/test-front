import React from 'react'
import GlobalStyle from './layout/GlobalStyle'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import Navbar from './layout/Navbar'

import { Provider } from 'react-redux'
import store from './store'

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
  </Provider>
)

export default App
