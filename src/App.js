import React from 'react'
import GlobalStyle from './layout/GlobalStyle'
import { BrowserRouter, Link } from 'react-router-dom'
import Routes from './Routes'

import { Provider } from 'react-redux'
import store from './store'

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">sacola</Link>
          </li>
          <li>
            <Link to="/payment">pagamento</Link>
          </li>
          <li>
            <Link to="/checkout">confirmação</Link>
          </li>
        </ul>
      </nav>
      <Routes />
    </BrowserRouter>
  </Provider>
)

export default App
