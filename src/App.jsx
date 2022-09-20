import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import Confirmation from './pages/Confirmation'

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <br />
          <Switch>
            <Route exact path="/" component={Cart} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/submit" component={Confirmation} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}
