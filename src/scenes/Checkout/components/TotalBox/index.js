import React, { Component } from 'react'

import { Container, Item } from './styles'

import { connect } from 'react-redux'

class TotalBox extends Component {
  render() {
    const { subTotal, shippingTotal, discount } = this.props
    const total = this.props.subTotal + this.props.shippingTotal - this.props.discount

    return (
      <Container>
        <Item index="Produtos" value={subTotal} />
        <Item index="Frete" value={shippingTotal} />
        <Item index="Desconto" value={discount} type="discount" />
        <Item index="Total" value={total} type="total" />
      </Container>
    )
  }
}

export default connect(state => ({
  subTotal: state.checkout.subTotal,
  shippingTotal: state.checkout.shippingTotal,
  discount: state.checkout.discount,
  total: state.checkout.total
}))(TotalBox)
