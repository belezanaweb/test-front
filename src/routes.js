import React from 'react'
import Home from './pages/Home'
import DetailProduct from './pages/DetailProduct'
import {  Route, Switch } from 'react-router-dom'

const Routes = () => {

  return (
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/detailproduct' exact component={DetailProduct} />
    </Switch>
  );
}

export default Routes
