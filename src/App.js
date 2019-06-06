import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Checkout from './scenes/Checkout'

import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" component={Checkout} />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
