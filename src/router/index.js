import React from 'react'
import Loadable from 'react-loadable'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Loader from '../components/Loader'
import Steps from '../components/Steps'

import { Container, Wrapper } from '../styles/base'

const Basket = Loadable({
  loader: () => import('../pages/basket'),
  loading: () => <Loader full />
})

const Checkout = Loadable({
  loader: () => import('../pages/checkout'),
  loading: () => <Loader full />
})

const Finish = Loadable({
  loader: () => import('../pages/finish'),
  loading: () => <Loader full />
})

const Router = () => (
  <BrowserRouter>
    <Container>
      <Wrapper>
        <Steps />
        <Switch>
          <Route path='/basket' component={Basket} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/finish' component={Finish} />
        </Switch>
      </Wrapper>
    </Container>
  </BrowserRouter>
)

export default Router
