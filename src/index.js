import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './globalStyles'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

const Strict = () => (
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))
