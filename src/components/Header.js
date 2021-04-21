import React from 'react'

import Cart from './Cart'
import Payment from './Payment'
import Success from './Success'
import NotFound from './NotFound'

import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

const Header = () => {
  return (
    <BrowserRouter>
      <>
        <div class="test">
          <Link class="header" to="/cart">
            SACOLA
          </Link>
          <Link class="header" to="/about">
            PAGAMENTO
          </Link>
          <Link class="header" to="/dashboard">
            CONFIRMAÇÃO
          </Link>
        </div>

        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/about">
            <Payment />
          </Route>
          <Route path="/dashboard">
            <Success />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

        <style jsx>{`
          .test {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            height: 40px;
            width: '100%';
          }
          .header {
            color: #ff7800;
            font-family: 'Helvetica Neue';
            font-size: 13px;
            font-weight: 700;
            line-height: 16px;
            text-align: center;
          }
        `}</style>
      </>
    </BrowserRouter>
  )
}

export default Header
