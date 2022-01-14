import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import { CreateFetchProvider } from './contexts/useFetch'
import { CreateCreditCardProvider } from './contexts/useCreditCardForm'

import App from './App'

const Strict = () => (
  <StrictMode>
    <CreateFetchProvider>
      <CreateCreditCardProvider>
        <App />
      </CreateCreditCardProvider>
    </CreateFetchProvider>
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()
