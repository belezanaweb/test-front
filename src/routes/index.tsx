import React from 'react'
import { Switch } from 'react-router-dom'
import Payment from '../pages/Payment'
import ProductBag from '../pages/ProductBag'
import DefaultRoute from '../templates/default'

const Routes: React.FC = () => {
  return (
    <Switch>
      <DefaultRoute exact path="/" component={ProductBag} />
      <DefaultRoute exact path="/payment" component={Payment} />
    </Switch>
  )
}

export default Routes
