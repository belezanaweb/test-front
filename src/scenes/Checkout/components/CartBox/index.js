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
    try {
      await axios
        .get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
        .then(response => {
          dispatch(this.setData(response))
        })
        .catch(error => {
          dispatch(this.dataGetsError(error))
        })
    } catch (error) {}
  }

  setData(data) {
    console.log(data)
    return {
      type: 'GET_DATA',
      cart: data
    }
  }

  dataGetsError(data) {
    return {
      type: 'GET_DATA_ERROR',
      cart: data,
      flash: true,
      message: 'teste'
    }
  }

  componentWillMount() {
    const { dispatch } = this.props
    this.getData(dispatch)
  }

  render() {
    const { cart } = this.props
    return (
      <Container>
        {/* <button onClick={() => this.getData(dispatch)}>Clicar</button> */}
        {cart.items.map((item, key) => (
          <ListItem key={key} className={this.props.condensed ? 'condensed' : ''}>
            <ListFigure src={item.product.imageObjects[0].small} />
            <ListDescription
              showPrice={this.props.condensed ? false : true}
              text={item.product.name}
              price={this.currency(item.product.priceSpecification.price)}
            />
          </ListItem>
        ))}
      </Container>
    )
  }
}

export default connect(state => ({
  cart: state.checkout.cart,
  frete: state.checkout.frete,
  discount: state.checkout.discount
}))(CartBox)
