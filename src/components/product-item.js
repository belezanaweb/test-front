import React, { Component } from 'react'
import { Item } from '../css/styles'

class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      image: {
        title: '',
        src: ''
      },
      price: 0.0,
      simple: false
    }
  }
  render() {
    const priceFormated = `R$ ${this.props.price.toFixed(2)}`

    return (
      <Item>
        <div className="photo">
          <img src={this.props.image.src} alt={this.props.image.title}></img>
        </div>
        <div className={`info ${this.props.simple ? 'simple' : ''}`}>
          <span>{this.props.title}</span>
          <h5>{priceFormated}</h5>
        </div>
      </Item>
    )
  }
}

export default ProductItem
