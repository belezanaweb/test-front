import React, { Component } from 'react'

import { Container, Item } from './styles'

import { connect } from 'react-redux'

class TotalBox extends Component {
  calculateSubTotal = () => {
    const { products } = this.props
    var total = 0

    products.map(product => (total += product.price))
    return total
  }

  calculateFrete = () => {}

  calculateDiscount = () => {}

  calculateTotal = (frete, discount) => {
    const subtotal = this.calculateSubTotal()
    var total = 0
    total += subtotal
    total += frete
    total -= discount

    return total
  }

  render() {
    const { frete, discount } = this.props
    const subtotal = this.calculateSubTotal()
    const total = this.calculateTotal(frete, discount)

    return (
      <Container>
        <Item index="Produtos" value={subtotal} />
        <Item index="Frete" value={frete} />
        <Item index="Desconto" value={discount} type="discount" />
        <Item index="Total" value={total} type="total" />
      </Container>
    )
  }
}

export default connect(state => ({
  products: state.products,
  frete: state.frete,
  discount: state.discount
}))(TotalBox)
