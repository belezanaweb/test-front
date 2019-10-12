import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import LazyRoute from './LazyRoute'

/* Pages */
const Cart = lazy(() => import('../pages/Cart'))

export default () => (
  <Router>
    <ScrollToTop>
      <Switch>
        <LazyRoute component={Cart} />
        <LazyRoute path="*" component={Cart} />
      </Switch>
    </ScrollToTop>
  </Router>
)
