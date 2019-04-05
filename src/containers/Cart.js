/** @jsx jsx */
import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import * as actionCart from '../actions/cart'

const Test = styled('div')`
  color: blue;
  height: 10px;
  width: 10px;
`;

class Cart extends Component {

  state = {}

  componentDidMount() {
    this.handleFetchDate()
  }
  handleFetchDate = () => {
    const { fetchProductsCart } = this.props

    fetchProductsCart()
  }
  render() {
    const { cart } = this.props

    console.log(cart, 'cart')
    return (
      <div>
        <Test>
          Cart
        </Test>
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.object,
  fetchProductsCart: PropTypes.func.isRequired
}

const mapStateToProps = ({ cartReducer }) => {
  console.log(cartReducer, 'cartReduccer')
  return {
    cart: cartReducer.cart
  }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(actionCart, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
