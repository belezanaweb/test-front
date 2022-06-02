import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SWRConfig } from 'swr'
import './index.css'
import Cart from './routes/Cart.jsx'
import App from './App'
import * as serviceWorker from './serviceWorker'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Strict = () => (
  <StrictMode>
    <SWRConfig value={{ fetcher }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </SWRConfig>
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()
