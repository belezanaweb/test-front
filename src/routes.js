import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Cart from "./components/Cart"
import Payment from "./components/Payment"
import Confirmation from "./components/Confirmation"

function Routes(){
  return(
    <BrowserRouter>
    <Route path="/" exact component={Cart} />
    <Route path="/payment" exact component={Payment} />
    <Route path="/confirmation/:cardNumber,:expiry,:name" component={Confirmation} />
    </BrowserRouter>
  )
}
export default Routes;