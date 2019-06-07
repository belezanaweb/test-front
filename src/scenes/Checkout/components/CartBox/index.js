import React, { Component } from 'react'

import { connect } from 'react-redux'

import { Container } from './styles'
import { ListItem, ListFigure, ListDescription } from '../Block'

import axios from 'axios'

class CartBox extends Component {
  currency = number => {
    number = number.toFixed(2).toString()
    number = 'R$ ' + number.replace('.', ',')
    return number
  }

  async getData(dispatch) {
    const dataApi = await axios
      .get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then(response => {
        dispatch(this.setData(response))
      })
  }

  setData(data) {
    return {
      type: 'GET_DATA',
      products: data
    }
  }

  render() {
    const { products, dispatch } = this.props
    console.log(products)
    return (
      <Container>
        <button onClick={() => this.getData(dispatch)}>Clicar</button>
        {products.map(product => (
          <ListItem key={product.id} className={this.props.condensed ? 'condensed' : ''}>
            <ListFigure src={product.product.imageObjects[0].small} />
            <ListDescription
              showPrice={this.props.condensed ? false : true}
              text={product.product.name}
              price={this.currency(product.product.priceSpecification.price)}
            />
          </ListItem>
        ))}
      </Container>
    )
  }
}

export default connect(state => ({
  products: state.checkout.products,
  frete: state.checkout.frete,
  discount: state.checkout.discount
}))(CartBox)
