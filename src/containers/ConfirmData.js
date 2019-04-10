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
import Card from '../components/cart/card'

const Container = styled('div')`
  height: 740px;
  width: 360px;
  background-color: #EEE;
`
const ContainerPayment = styled('div')`
  margin: 20px 10px 0 9px;
  height: 73px;
  width: 340px;
  border-radius: 3px;
  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
`

const CardContainer = styled('div')`
  margin: 20px 10px 0 9px;
  height: 325px;
  width: 341px;
  border-radius: 3px;
  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
`;

const TitleSuccess = styled('h1')`
  height: 17px;
  width: 266.27px;
  color: #FF7800;
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 17px;
  text-align: center;
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
const Paragraph = styled('p')`
  color: #000;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 15px;
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
        <TitleSuccess>Compra Efetuada com Sucesso</TitleSuccess>
        <PaymentParagraph>Pagamento</PaymentParagraph>
        <ContainerPayment>
          <Paragraph>{payment.card}</Paragraph>
          <Paragraph>{payment.nameCard}</Paragraph>
          <Paragraph>{payment.validate}</Paragraph>
        </ContainerPayment>

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

      </Container>
    );
  }
}

Payment.propTypes = {
  cart: PropTypes.object,
  payment: PropTypes.object,
  fetchProductsCart: PropTypes.func.isRequired
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
