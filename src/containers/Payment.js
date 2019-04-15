/** @jsx jsx */
import { Component } from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { handlePayment } from '../actions/payment'
import Breadcrumb from '../components/Breabcrumb'
import PurchaseSummary from '../components/PurchaseSummary'
import ForwardButton from '../components/ForwardButton'
import PaymentForm from '../components/PaymentForm'

const Container = styled('main')`
  width: 95%;
  margin: auto;

  h1 {
    color: #999999;
    font-size: 14px;
    margin-top: 10px;
    font-weight: 700;
    line-height: 17px;
  }
`
const PaymentContainer = styled('section')`
  background-color: #FFFFFF;
  padding: 12px;
  margin-top: 5px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.20);
  border-radius: 3px;
  min-width: 285px; 
`
class Payment extends Component {
  constructor(props) {
    super(props);
    this.state={
      disabled: true,
      numero: '',
      titular: '',
      validade: '',
      cvv: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {    
    const {value, name} = event.target;

    this.setState({
      [name]: value
    });
  }

  addPayment = () => {    
    const { numero, titular, validade, cvv } = this.state
    const payment = { numero, titular, validade, cvv }    
    this.props.dispatch(handlePayment(payment))
  }

  render() {
    const shoppingCart = this.props.shoppingCart

    return (
      <div>        
        <Breadcrumb step={2} />
        <Container>
          <h1>CARTÃO DE CRÉDITO</h1>
          <PaymentContainer>
            <PaymentForm
              disabled={(disabled)=>{this.setState({disabled})}}
              numero={this.state.numero}
              titular={this.state.titular}
              validade={this.state.validade}
              cvv={this.state.cvv}
              handleChange={this.handleChange}
            />
          </PaymentContainer>

          <PurchaseSummary shoppingCart={shoppingCart} />

          <Link to='/confirmacao'>
            <ForwardButton
              text={'FINALIZAR O PEDIDO'}
              disabled={this.state.disabled}
              onClick={this.addPayment}
            />
          </Link>
        </Container>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    shoppingCart: state.shoppingCart,
  }
}

Payment.propTypes = {
  shoppingCart: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(Payment)
