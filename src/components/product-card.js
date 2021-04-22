import React, { Component } from 'react'
import { Title, Card } from '../css/styles'

class ProductCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }
  render() {
    return (
      <div>
        <Title>{this.props.title}</Title>
        <Card>{this.props.children}</Card>
      </div>
    )
  }
}

export default ProductCard
