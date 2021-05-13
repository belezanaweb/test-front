import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from './styles'

import Menu from './Menu'
import Cart from '../pages/Cart'

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
            <About />
          </Route>
          <Route path="/payment">
            <Users />
          </Route>
          <Route path="/">
            <Cart />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}
