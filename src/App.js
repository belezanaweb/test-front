import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { CheckoutProvider } from './hooks/useCheckout'
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import SuccessPayment from './pages/SuccessPayment'

const App = () => {
  return (
    <BrowserRouter>
      <CheckoutProvider>
        <Header />
        <Switch>
          <Route path="/" exact component={Cart} />
          <Route path="/payment" component={Payment} />
          <Route path="/success" component={SuccessPayment} />
        </Switch>
      </CheckoutProvider>
    </BrowserRouter>
  )
}

export default App
