import React from 'react'
import Loadable from 'react-loadable'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Loader from '../components/Loader'
import Steps from '../components/Steps'

import { Container, Wrapper } from '../style/base'

const Cart = Loadable({
  loader: () => import('../pages/cart'),
  loading: () => <Loader full />
})

const Checkout = Loadable({
  loader: () => import('../pages/checkout'),
  loading: () => <Loader full />
})

const Payment = Loadable({
  loader: () => import('../pages/payment'),
  loading: () => <Loader full />
})

const Router = () => (
  <BrowserRouter>
    <Container>
      <Wrapper>
        <Steps />
        <Switch>
          <Route path='/' component={Cart} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/finish' component={Payment} />
        </Switch>
      </Wrapper>
    </Container>
  </BrowserRouter>
)

export default Router