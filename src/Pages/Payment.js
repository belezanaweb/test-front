import React, { Component } from 'react';
import './Payment.css';
import Input from '../Components/Input'
import '../Components/Button.css';

import Checkout from './Layout/Checkout'
import CartPrice from '../Components/CartPrice'

import { connect } from 'react-redux';

class Payment extends Component{
  submitForm() {
    console.log(arguments);
  }

  render() {
    const { productList } = this.props;

    return(<Checkout>
      <form id="paymentForm" onSubmit={this.submitForm.bind(this)}>
        <p className="group-title">Cartão de crédito</p>
        <div className="payment-form">
          <div key="creditCard" className="input-group">
            <Input type="creditCard" label="Número do cartao:" required />
          </div>

          <div key="cardName" className="input-group">
            <Input type="text" placeholder="Como no cartão" label="Nome do Titular:" required />
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "50% 50%"
          }}>
            <div key="creditCardExpiration" className="input-group" style={{
              marginRight: "10px"
            }}>
              <Input type="creditCardExpiration" label="Validade (mes/ano):" required />
            </div>

            <div key="cvv" className="input-group" style={{
              marginLeft: "10px"
            }}>
              <Input type="cvv" label="CVV:" required />
            </div>
          </div>
        </div>

        <CartPrice products={productList} currency="BRL" />

        <input type="submit" className="btn" style={{
          marginTop: '20px'
        }} value="finalizar o pedido" />
      </form>
    </Checkout>);
  }
}


const mapStateToProps = store => ({
  productList: store.cartState.productList
});

export default connect(mapStateToProps)(Payment);
