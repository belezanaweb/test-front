/** @jsx jsx */
import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import * as actionCart from '../actions/cart'
import { Link } from 'react-router-dom'

import Menu from '../components/utils/Menu'
import Price from '../components/utils/Price'
import Card from '../components/cart/card'

const Container = styled('div')`
  height: 720px;
  width: 360px;
  background-color: #EEE;
`
const CardContainer = styled('div')`
  margin: 20px 10px 0 9px;
  height: 325px;
  width: 341px;
  border-radius: 3px;
  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
`;


const ConfirmButton = styled('button')`
  margin: 20px 10px 0 9px;
  height: 60px;
  width: 341px;
  border-radius: 3px;
  background-color: #FF6C00;
  box-shadow: inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25);

  a {
    height: 24px;
    width: 339px;
    color: #FFF;
    font-family: "Helvetica Neue";
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 24px;
    text-decoration: none;
    text-align: center;
  }
`

const PaymentParagraph = styled('p')`
  height: 17px;
  width: 319px;
  color: #999;
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 17px;
`

class Cart extends Component {

  componentDidMount() {
    this.handleFetchDate()
  }
  
  handleFetchDate = () => {
    const { fetchProductsCart } = this.props

    fetchProductsCart()
  }

  handleSubmit = (values) => {
    const { fetchPayments } = this.props
    const {
      total,
      subTotal,
      shippingTotal,
      discount
    } = values

    const cartValues = {
      total,
      subTotal,
      shippingTotal,
      discount
    }

    fetchPayments(cartValues)
  }

  render() {
    const { cart } = this.props
 
    return (
      <Container>
        <Menu />
        <PaymentParagraph>Produtos</PaymentParagraph>
        <CardContainer>
          {
            cart.items.map((item, index) =>
            <Card items={item} key={index} />
        )}
        </CardContainer>
        <Price 
          total={cart.total}
          subTotal={cart.subTotal}
          shippingTotal={cart.shippingTotal}
          discount={cart.discount}
        />

        <ConfirmButton onClick={() => this.handleSubmit(cart)}>
          <Link to='/pagamento'>Seguir para o pagamento</Link>
        </ConfirmButton>
      </Container>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.object,
  fetchProductsCart: PropTypes.func.isRequired,
  fetchPayments: PropTypes.func.isRequired
}

const mapStateToProps = ({ cartReducer }) => {
  return {
    cart: cartReducer.cart
  }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(actionCart, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
