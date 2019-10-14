import React, { lazy } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import ScrollToTop from './ScrollToTop'
import LazyRoute from './LazyRoute'
import store from 'store'

/* Pages */
const Cart = lazy(() => import('../pages/Cart'))
const Payment = lazy(() => import('../pages/Payment'))

export default () => (
  <Provider store={store}>
    <Router>
      <ScrollToTop>
        <Switch>
          <LazyRoute exact path="/cart" component={Cart} />
          <LazyRoute exact path="/payments" component={Payment} />
          <Redirect to="/cart" />
        </Switch>
      </ScrollToTop>
    </Router>
  </Provider>
)
