/** @jsx jsx */
import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import * as actionCart from '../actions/cart'

import Menu from '../components/utils/Menu'
import Price from '../components/utils/Price'

const Container = styled('div')`
  height: 720px;
  width: 360px;
  background-color: #EEE;
`
const ContainerPayment = styled('div')`
  height: 73px;
  width: 340px;
  border-radius: 3px;
  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
`

class Payment extends Component {

  componentDidMount() {
    this.handleFetchDate()
  }
  
  handleFetchDate = () => {
    const { fetchProductsCart } = this.props

    fetchProductsCart()
  }

  render() {
    const { cart, payment } = this.props

    return (
      <Container>
        <Menu />
        <h1>Compra Efetuada com Sucesso</h1>
        <h1>Pagamento</h1>
        <ContainerPayment>
          <p>{payment.card}</p>
          <p>{payment.nameCard}</p>
          <p>{payment.validate}</p>
        </ContainerPayment>
        <Price 
          total={cart.total}
          subTotal={cart.subTotal}
          shippingTotal={cart.shippingTotal}
          discount={cart.discount}
        />

      </Container>
    );
  }
}

Payment.propTypes = {
  cart: PropTypes.object,
  fetchProductsCart: PropTypes.func.isRequired,
  fetchPayments: PropTypes.func.isRequired
}

const mapStateToProps = ({ cartReducer }) => {
  return {
    cart: cartReducer.cart,
    payment: cartReducer.payment
  }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(actionCart, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
