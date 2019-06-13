import React, { Component } from 'react';

import { Container, Description } from './style';

import handleMoney from '../../utils/handleMoney'

export default class product extends Component {

  state ={
    product: this.props.item.product
  }

  render() {
    return (
      <Container className="product-item">
        <img alt={this.state.product.name} src={this.state.product.imageObjects[0].thumbnail} />
        <Description>
          <p>{this.state.product.name}</p>
          <p className="price">{handleMoney(this.state.product.priceSpecification.price)}</p>
        </Description>
      </Container>
    )
  }
}
