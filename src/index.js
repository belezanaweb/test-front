import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { GlobalStyle } from './assets/styles/global'
import { CheckoutProvider } from './hooks/useCheckout'

const Strict = () => (
  <StrictMode>
    <CheckoutProvider>
      <GlobalStyle />
      <App />
    </CheckoutProvider>
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()
