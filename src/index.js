import React, { StrictMode } from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyles from './styles/global'
import store from './store/store'

const Strict = () => (
  <StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyles />
    </Provider>
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))
