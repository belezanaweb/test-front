import React, { Component } from 'react'
import { Resume } from '../css/styles'

class ResumeCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: {
        sub_total: 0.0,
        shipping_total: 0.0,
        discount: 0.0,
        total: 0.0
      }
    }
  }
  render() {
    return (
      <Resume>
        <li>
          <h5>Produtos</h5>
          <h5>R$ {this.props.values.sub_total.toFixed(2)}</h5>
        </li>
        <li>
          <h5>Frete</h5>
          <h5>R$ {this.props.values.shipping_total.toFixed(2)}</h5>
        </li>
        <li className="discount">
          <h5>Desconto</h5>
          <h5>- R$ {this.props.values.discount.toFixed(2)}</h5>
        </li>
        <li className="total">
          <h5>Total</h5>
          <h5>R$ {this.props.values.total.toFixed(2)}</h5>
        </li>
      </Resume>
    )
  }
}

export default ResumeCard
