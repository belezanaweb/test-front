/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
//routes
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
//context and component
import Header from './components/Header'
import { useCart } from './context/useCart'
//pages
import Bag from './pages/Bag'
import Payment from './pages/Payment'
import Success from './pages/Success'

const App = () => {
  // Makes the context consume multiple components
  const { getData } = useCart()

  useEffect(() => {
    getData()
  }, [])

  return (
    <BrowserRouter>
      <Header />
      {/* The application routes, goes through the main route "/" and already redirects to the bag */}
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/bag" />} />
        <Route path="/bag" exact component={Bag} />
        <Route path="/payment" component={Payment} />
        <Route path="/success" component={Success} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
