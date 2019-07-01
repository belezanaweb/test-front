import React, { Component } from 'react'
import BagResume from '../bag/BagResume'
import CreditCardForm from './CreditCardForm'

export default class Payment extends Component {
  render() {
    const paymentStyle = {
      backgroundColor: '#EEE',
      paddingLeft: '9px',
      paddingRight: '10px',
      paddingBottom: '100%',
      width: '100%'
    }
    const paymentTitleStyle = {
      marginLeft: '13px'
    }
    return (
      <div style={paymentStyle}>
        <p style={paymentTitleStyle}>Cartão de Credito</p>
        <CreditCardForm />
        <BagResume />
      </div>
    )
  }
}
