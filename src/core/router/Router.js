import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Bag from '../../pages/bag'

const Routers = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Bag} />
        <Route component={Bag} />
      </Switch>
    </BrowserRouter>
  </>
)

export default Routers
