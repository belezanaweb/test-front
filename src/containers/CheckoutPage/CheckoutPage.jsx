import React, { Component } from 'react'
import CartPage from '../CartPage/CartPage';
import CartSteps from '../../components/CartSteps/CartSteps';
import Container from '../Container/Container';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import PaymentFormPage from '../PaymentFormPage/PaymentFormPage';

import { addProducts, startLoading, finishLoading, updateTotalizers } from '../../store/actions/cart';
import Axios from 'axios';
import { connect } from 'react-redux'
import ConfirmationPage from '../ConfirmationPage/ConfirmationPage';

class CheckoutPage extends Component {
  async componentDidMount() {
    if (this.props.isLoaded) return

    // Load checkout information here, as it will be available in all checkout internal routes
    this.props.toggleLoading(true)
    const cart = await this.getCart()
    this.props.addProducts(cart.items)
    this.props.updateTotalizers(cart.subTotal, cart.shippingTotal, cart.discount, cart.total)
    this.props.toggleLoading(false)
  }

  async getCart() {
    const { data } = await Axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
    return data
  }

  render() {
    return (
      <div>
        <header>
          <CartSteps />
        </header>
        <Container>
          <Switch>
            <Route path="/checkout/cart" exact component={CartPage} />
            <Route path="/checkout/payment" component={PaymentFormPage} />
            <Route path="/checkout/placed" component={ConfirmationPage} />
            <Redirect path="/checkout" to="/checkout/cart" />
          </Switch>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoaded: state.cart.loaded,
})

const mapDispatchToProps = dispatch => ({
  addProducts: products => dispatch(addProducts(products)),
  updateTotalizers: (subTotal, shippingTotal, discount, total) => dispatch(updateTotalizers(subTotal, shippingTotal, discount, total)),
  toggleLoading: isLoading => dispatch(isLoading ? startLoading() : finishLoading()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckoutPage))
