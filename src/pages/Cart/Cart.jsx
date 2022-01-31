import React, { Component } from 'react'
import Logo from '../../logo.svg'
import '../../App.css'

import request from '../../request'

class Cart extends Component {
  state = {
    produtos: []
  }

  async componentDidMount() {
    const response = await request.getProdutos('')

    this.setState({ produtos: response.data })
  }

  render() {
    const { produtos } = this.state
    return (
      <div>
        <h1>Teste</h1>
        {produtos.items?.map((produto) => (
          <h2>
            {produto.product.name}
            {produto.product.priceSpecification.price}
          </h2>
        ))}
      </div>
    )
  }
}
export default Cart
