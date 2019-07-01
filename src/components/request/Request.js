import React, { Component } from 'react'
import BagResume from '../bag/BagResume'
import BagItemsList from '../bag/BagItemsList'
import CardData from '../payment/CardData'

export default class Request extends Component {
  render() {
    const requestStyle = {
      backgroundColor: '#EEE',
      paddingLeft: '9px',
      paddingRight: '10px',
      paddingBottom: '100%',
      width: '100%'
    }

    const requestTitleStyle = {
      marginLeft: '13px'
    }

    const succededPaymentStyle = {
      color: 'orange',
      textAlign: 'center'
    }
    return (
      <div style={requestStyle}>
        <p style={{ ...requestTitleStyle, ...succededPaymentStyle }}>Compra efetuada com sucesso</p>
        <CardData />
        <p style={requestTitleStyle}>Produtos</p>
        <BagItemsList showPrice={false} />
        <br />
        <BagResume />
      </div>
    )
  }
}
