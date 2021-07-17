import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './navbarContainer/index'
import { CartContainer } from './cartContainer/cartContainer'
import { PaymentContainer } from './paymentContainer/paymentContainer'
import { SuccessContainer } from './successContainer/successContainer'
import { Loading } from '../commons/loading'
import { connect } from 'react-redux'
import { productsThunks } from '../thunks/products'
import './checkout.css'

const Component = ({ isLoading, dispatch }) => {
  useEffect(() => {
    dispatch(productsThunks.getAll())
  })

  return (
    <div className="checkout">
      {isLoading ? (
        <Loading />
      ) : (
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <CartContainer />
            </Route>
            <Route path="/payment">
              <PaymentContainer />
            </Route>
            <Route path="/success">
              <SuccessContainer />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  )
}

const Checkout = connect((state) => ({ isLoading: state.products.isLoading }))(Component)

export { Checkout }
