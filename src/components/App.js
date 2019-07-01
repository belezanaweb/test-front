import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Header from './layout/Header'
import Bag from './bag/Bag'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Payment from './payment/Payment'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Bag} />
                <Route exact path="/payment" component={Payment} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App
