/** @jsx jsx */
import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import * as actionCart from '../actions/cart'

import Card from '../components/cart/card'

const Container = styled('div')`
  height: 720px;
  width: 360px;
  background-color: #EEE;
`
const CardContainer = styled('div')`
  height: 325px;
  width: 341px;
  border-radius: 3px;
  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
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
    return (
      <Container>
        <CardContainer>
          {
            cart.items.map((item, index) =>
            <Card items={item} key={index} />
        )}
        </CardContainer>
      </Container>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.object,
  fetchProductsCart: PropTypes.func.isRequired
}

const mapStateToProps = ({ cartReducer }) => {
  return {
    cart: cartReducer.cart
  }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(actionCart, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
