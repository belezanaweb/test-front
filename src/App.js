import React from 'react'
import './App.css'
import { ReducerContextProvider } from './reducer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ShoppingCart } from './pages/ShoppingCart'
import { Payment } from './pages/Payment'
import { Checkout } from './pages/Checkout'

const App = (props) => {
  return (
    <div className="App">
      <ReducerContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ShoppingCart}></Route>
            <Route path="/payment" component={Payment}></Route>
            <Route path="/checkout" component={Checkout}></Route>
          </Switch>
        </BrowserRouter>
      </ReducerContextProvider>
    </div>
  )
}

export default App
