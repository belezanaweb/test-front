import React from 'react'
import { Switch } from 'react-router-dom'
import ProductBag from '../pages/ProductBag'
import DefaultRoute from '../templates/default'

const Routes: React.FC = () => {
  return (
    <Switch>
      <DefaultRoute exact path="/" component={ProductBag} />
    </Switch>
  )
}

export default Routes
