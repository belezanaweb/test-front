import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { formatPrice } from '~/utils/format'
import ProductCartInfo from '~/components/ProductCartInfo'

import history from '~/services/history'

import BLWSingleTitle from '~/components/BLWSingleTitle'
import BLWButton from '~/components/BLWButton'
import PaymentInputsContainer from '~/components/PaymentInputsContainer'

import { Container, FormToPay } from './styles'

import * as actions from '~/store/ducks/checkout/actions'

class Checkout extends Component {
  state = {
    cart: '',
    subTotal: '',
    shippingTotal: '',
    discount: '',
    total: ''
  }
  componentDidMount() {
    const sacola = JSON.parse(localStorage.getItem('sacola'))

    this.setState({
      subTotal: formatPrice(sacola ? sacola.subTotal : ''),
      shippingTotal: formatPrice(sacola ? sacola.shippingTotal : ''),
      discount: `- ${formatPrice(sacola ? sacola.discount : '')}`,
      total: formatPrice(sacola ? sacola.subTotal + sacola.shippingTotal - sacola.discount : '')
    })
  }

  handleCheckout = () => {
    const { activeButtonRequest } = this.props
    if (
      document.getElementById('cvc').value &&
      document.getElementById('expiryDate').value &&
      document.getElementById('cardNumber').value &&
      document.getElementById('holdername').value &&
      document.getElementById('buttonIsActivefalse')
    ) {
      history.push('/checkout/recibo')
    } else {
      activeButtonRequest({
        cardNumber: !document.getElementById('cardNumber').value ? true : false,
        holdername: !document.getElementById('holdername').value ? true : false,
        expiryDate: !document.getElementById('expiryDate').value ? true : false,
        cvc: !document.getElementById('cvc').value ? true : false
      })
    }
  }

  render() {
    const { total, subTotal, shippingTotal, discount } = this.state

    return (
      <Container>
        <div className="formContainer">
          <BLWSingleTitle title="Cartão de crédito" />
          <FormToPay>
            <PaymentInputsContainer />
          </FormToPay>
        </div>
        <div className="sideBar">
          <ProductCartInfo
            total={total}
            subTotal={subTotal}
            shippingTotal={shippingTotal}
            discount={discount}
          />
          <BLWButton type="button" onClick={this.handleCheckout} title="Finalizar o pedido" />
        </div>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  activeButton: state.checkout.data
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
