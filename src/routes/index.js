import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from './styles'

import Menu from './Menu'
import Cart from '../pages/Cart'
import Payment from '../pages/Payment'
import Confirm from '../pages/Confirm'

export default function Routes() {
  const menus = [
    {
      name: 'Sacola',
      path: '/'
    },
    {
      name: 'Pagamento',
      path: '/payment'
    },
    {
      name: 'Confirmação',
      path: '/confirm'
    }
  ]

  return (
    <Router>
      <Container>
        <Menu menus={menus} />
        <Switch>
          <Route path="/confirm">
            <Confirm />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/">
            <Cart />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}
