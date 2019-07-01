import React, { Component } from 'react'
import CreditCardForm from './CreditCardForm'

export default class Payment extends Component {
  render() {
    const paymentStyle = {
      backgroundColor: '#EEE',
      paddingLeft: '9px',
      paddingRight: '10px',
      paddingBottom: '38%',
      width: '100%'
    }
    const paymentTitleStyle = {
      marginLeft: '13px',
      paddingTop: '10px',
      color: 'gray'
    }
    return (
      <div style={paymentStyle}>
        <p style={paymentTitleStyle}>CARTÃO DE CRÉDITO</p>
        <CreditCardForm />
        <br />
      </div>
    )
  }
}
