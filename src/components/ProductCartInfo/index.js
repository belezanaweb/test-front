import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Total } from './styles'

class ProductCartInfo extends Component {
  render() {
    const { subTotal, shippingTotal, discount, total, classNameContainer } = this.props

    if (!subTotal && !shippingTotal && !total) {
      return null
    }

    return (
      <Total className={classNameContainer} data-test="productCartInfoComponent">
        <div className="items">
          <p data-test="produtosSubTotal">
            Produtos <span>{subTotal}</span>
          </p>
          <p data-test="freteShippingTotal">
            Frete <span>{shippingTotal}</span>
          </p>
          <p className="discount" data-test="descontoDiscount">
            Desconto <span>{discount}</span>
          </p>
        </div>

        <p className="total" data-test="total">
          Total <span>{total}</span>
        </p>
      </Total>
    )
  }
}

ProductCartInfo.propTypes = {
  subTotal: PropTypes.string,
  shippingTotal: PropTypes.string,
  discount: PropTypes.string,
  total: PropTypes.string,
  classNameContainer: PropTypes.string
}

export default ProductCartInfo
