import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import * as serviceWorker from './serviceWorker'
import { GlobalStyle } from './styles/global'
import { CartProvider } from './context/useCart'

const Strict = () => (
  <StrictMode>
    {/* All status is passed to the provider */}
    <CartProvider>
      <GlobalStyle />
      <App />
    </CartProvider>
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()
