import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Checkout from './scenes/Checkout'
import Cart from './scenes/Checkout/pages/Cart'
import Payment from './scenes/Checkout/pages/Payment'
import Conclusion from './scenes/Checkout/pages/Conclusion'

import Form from './scenes/Checkout/pages/Form'

import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {/* <Route path="/" component={Checkout} /> */}
          <Route path="/cart" component={Cart} />
          <Route path="/payment" component={Payment} />
          <Route path="/conclusion" component={Conclusion} />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
