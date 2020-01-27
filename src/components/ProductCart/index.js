import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

class ProductCart extends Component {
  render() {
    const { productIMG, productName, productPrice } = this.props

    if (!productIMG && !productName && !productPrice) {
      return null
    }

    return (
      <Container data-test="productCartComponent">
        <div className="produc">
          <img src={productIMG} alt={productName} data-test="productIMG" />
          <div>
            <p className="name" data-test="productName">
              {productName}
            </p>
            <p className="price" data-test="productPrice">
              {productPrice}
            </p>
          </div>
        </div>
      </Container>
    )
  }
}

ProductCart.propTypes = {
  productIMG: PropTypes.string,
  productName: PropTypes.string,
  productPrice: PropTypes.string
}

export default ProductCart
