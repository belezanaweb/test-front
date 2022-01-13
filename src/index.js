import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import { CreateFetchProvider } from './contexts/useFetch'
import App from './App'

const Strict = () => (
  <StrictMode>
    <CreateFetchProvider>
      <App />
    </CreateFetchProvider>
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()
