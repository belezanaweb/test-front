import React, { Component } from 'react';

import { Container, Description, Value } from './style';

import handleMoney from '../../utils/handleMoney'

export default class ValueDescription extends Component {
  render() {
    return (
      <Container>
          <Description>
            <li>Produtos</li>
            <li>Frete</li>
            <li className="discount">Desconto</li>
            <li className="total">Total</li>
          </Description>
          <Value>
            <li>{handleMoney(this.props.subTotal)}</li>
            <li>{handleMoney(this.props.shippingTotal)}</li>
            <li className="discount">- {handleMoney(this.props.discount)}</li>
            <li className="total">{handleMoney(this.props.total)}</li>
          </Value>
      </Container>
    );
  }
}
