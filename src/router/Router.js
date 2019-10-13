import React, { lazy } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import ScrollToTop from './ScrollToTop'
import LazyRoute from './LazyRoute'
import store from 'store'

/* Pages */
const Cart = lazy(() => import('../pages/Cart'))

export default () => (
  <Provider store={store}>
    <Router>
      <ScrollToTop>
        <Switch>
          <LazyRoute path="/cart" component={Cart} />
          <LazyRoute path="*" component={Cart} />
        </Switch>
      </ScrollToTop>
    </Router>
  </Provider>
)
