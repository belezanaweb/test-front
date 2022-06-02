import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SWRConfig } from 'swr'
import './index.css'
import Cart from './routes/Cart.jsx'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './store'
import { Provider } from 'react-redux'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Strict = () => (
  <StrictMode>
    <Provider store={store}>
      <SWRConfig value={{ fetcher }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </SWRConfig>
    </Provider>
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()
