import React, { Component } from 'react'

import { connect } from 'react-redux'

import { Container } from './styles'
import { ListItem, ListFigure, ListDescription } from '../Block'

class CartBox extends Component {
  currency = number => {
    number = number.toFixed(2).toString()
    number = 'R$ ' + number.replace('.', ',')
    return number
  }

  render() {
    const { products } = this.props

    return (
      <Container>
        {products.map(product => (
          <ListItem key={product.id} className={this.props.condensed ? 'condensed' : ''}>
            <ListFigure src={product.image} />
            <ListDescription
              showPrice={this.props.condensed ? false : true}
              text={product.name}
              price={this.currency(product.price)}
            />
          </ListItem>
        ))}
      </Container>
    )
  }
}

export default connect(state => ({
  products: state.products,
  frete: state.frete,
  discount: state.discount
}))(CartBox)
