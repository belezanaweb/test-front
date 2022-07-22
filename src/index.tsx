import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './assets/styles/global'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import store from './redux/store'
import * as serviceWorker from './serviceWorker'

const Strict = () => (
  <StrictMode>
    {/* <Provider store={store}> */}
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </Provider> */}
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()
