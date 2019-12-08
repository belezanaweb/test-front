import React, { Component } from 'react';
import './Payment.css';
import Input from '../Components/Input'
import '../Components/Button.css';
import { persistStore } from 'redux-persist'
import { localStorage as storage } from 'redux-persist/lib/storage';

import CartPrice from '../Components/CartPrice'
import Checkout from './Layout/Checkout'



class Payment extends Component{
  componentDidMount() {

  }

  render() {
    return(<Checkout>
      <form id="paymentForm">
        <div className="payment-form">
          <div className="input-group">
            <Input type="creditCard" label="Número do cartao:" required />
          </div>

          <div className="input-group">
            <Input type="text" placeholder="Como no cartão" label="Nome do Titular:" required />
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "50% 50%"
          }}>
            <div className="input-group" style={{
              marginRight: "10px"
            }}>
              <Input type="creditCardExpiration" label="Validade (mes/ano):" required />
            </div>

            <div className="input-group" style={{
              marginLeft: "10px"
            }}>
              <Input type="cvv" label="CVV:" required />
            </div>
          </div>
        </div>

        <input type="submit" className="btn" onClick={() => {

        }} value="finalizar o pedido" />
      </form>
    </Checkout>);
  }
}

export default Payment;
