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

const Container = styled('div')`
  height: 720px;
  width: 360px;
  background-color: #EEE;
`
const FormContainer = styled('div')`
  margin: 20px 10px 0 9px;
  height: 325px;
  width: 341px;
  border-radius: 3px;
  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
`

const CreditField = styled('input')`
  box-sizing: border-box;
  height: 45px;
  width: 320px;
  border-radius: 3px;
  background-color: #FFF;
  border: 1px solid #E7E7E7;
  box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
`

const NameField = styled('input')`
  box-sizing: border-box;
  height: 45px;
  width: 320px;
  border-radius: 3px;
  background-color: #FFF;
  border: 1px solid #E7E7E7;
  box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
`

const ValidateField = styled('input')`
  box-sizing: border-box;
  height: 45px;
  width: 160px;
  border-radius: 3px;
  background-color: #FFF;
  border: 1px solid #E7E7E7;
  box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
`

const CvvField = styled('input')`
  box-sizing: border-box;
  height: 45px;
  width: 140px;
  border-radius: 3px;
  background-color: #FFF;
  border: 1px solid #E7E7E7;
  box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
`


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

class Payment extends Component {

  state = {
    card: '',
    nameCard: '',
    validate: '',
    cvv: ''
  }

  componentDidMount() {
    this.handleFetchDate()
  }
  
  handleFetchDate = () => {
    const { fetchProductsCart } = this.props

    fetchProductsCart()
  }

  handleChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { fetchData } = this.props
    const { card, nameCard, validate, cvv } = this.state
    const values = { card, nameCard, validate, cvv }

    fetchData(values)
  }

  render() {
    const { cart } = this.props
    const {
      card,
      nameCard,
      validate,
      cvv
    } = this.state
 
    return (
      <Container>
        <Menu />
        <PaymentParagraph>Cartão de credito</PaymentParagraph>
        <FormContainer>
          <form>
            <label>Número do cartão</label>
            <CreditField
              type='text'
              placeholder='XXXX.XXXX.XXXX.XXXX'
              name='card'
              value={card}
              onChange={this.handleChange}
            />
            <label>Nome do titular</label>
            <NameField
              type='text'
              placeholder='como no cartao'
              name='nameCard'
              value={nameCard}
              onChange={this.handleChange}
            />
            <ValidateField
              type='month'
              required="required"
              placeholder='validade'
              name='validate'
              value={validate}
              onChange={this.handleChange}
            />
            <CvvField
              type='text'
              placeholder='cvv'
              name='cvv'
              value={cvv}
              onChange={this.handleChange}
            />
          </form>
        </FormContainer>
        <Price 
          total={cart.total}
          subTotal={cart.subTotal}
          shippingTotal={cart.shippingTotal}
          discount={cart.discount}
        />

        <ConfirmButton onClick={this.handleSubmit}>
          <Link to='/pagamento/confirmado'>Finalizar Pedido</Link>
        </ConfirmButton>
      </Container>
    );
  }
}

Payment.propTypes = {
  cart: PropTypes.object,
  fetchProductsCart: PropTypes.func.isRequired,
  fetchPayments: PropTypes.func.isRequired,
  fetchData:PropTypes.func.isRequired
}

const mapStateToProps = ({ cartReducer }) => {
  return {
    cart: cartReducer.cart
  }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(actionCart, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
