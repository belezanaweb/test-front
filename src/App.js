import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header } from './components/Header'
import { useCheckout } from './hooks/useCheckout'

import Cart from './pages/Cart'
import Payment from './pages/Payment'
import SuccessPayment from './pages/SuccessPayment'

const App = () => {
  const { getData } = useCheckout()

  useEffect(() => {
    getData()
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/cart" exact component={Cart} />
        <Route path="/payment" component={Payment} />
        <Route path="/success" component={SuccessPayment} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
