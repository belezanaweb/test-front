import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ShoppingCart } from './pages/ShoppingCart'
import { Payment } from './pages/Payment'
import { Checkout } from './pages/Checkout'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route path="/" component={ShoppingCart}></Route>
            <Route path="/payment" component={Payment}></Route>
            <Route path="/checkout" component={Checkout}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
