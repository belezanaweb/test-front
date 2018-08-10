import React from 'react'
import Loadable from 'react-loadable'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Steps from '../components/Steps'

const Basket = Loadable({
  loader: () => import('../pages/basket'),
  loading: () => <h1>Loading!</h1>
})

const Checkout = Loadable({
  loader: () => import('../pages/checkout'),
  loading: () => <h1>Loading!</h1>
})

const Finish = Loadable({
  loader: () => import('../pages/finish'),
  loading: () => <h1>Loading!</h1>
})

const Router = () => (
  <BrowserRouter>
    <div>
      <Steps />
      <Switch>
        <Route path='/basket' component={Basket} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/finish' component={Finish} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default Router
