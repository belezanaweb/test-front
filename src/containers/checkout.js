import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './navbarContainer/index'
import { CartContainer } from './cartContainer/cartContainer'
import { PaymentContainer } from './paymentContainer/paymentContainer'
import { SuccessContainer } from './successContainer/successContainer'
import { Loading } from '../commons/loading'
import { connect } from 'react-redux'
import { productsThunks } from '../thunks/products'

const Checkout = ({ isLoading, dispatch }) => {
  useEffect(() => {
    dispatch(productsThunks.getAll())
  })

  if (isLoading) {
    return <Loading />
  }

  return (
    <Router>
      <div className="App">
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
      </div>
    </Router>
  )
}

export default connect((state) => ({ isLoading: state.products.isLoading }))(Checkout)
