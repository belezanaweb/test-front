import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import Cart from './pages/cart/Cart'
import Confirmation from './pages/confirmation/Confirmation'
import Payment from './pages/payment/Payment'
import { Store } from './states/stores'

const App = () => (
  <div className="App">
    <Provider store={Store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Cart} />
          <Route path="/payment" component={Payment} />
          <Route path="/confirmation" component={Confirmation} />
        </Switch>
      </Router>
    </Provider>
  </div>
)

export default App
