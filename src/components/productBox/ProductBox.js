import React from 'react'
import PropTypes from 'prop-types'
import {
  ProductContainer,
  ProductImage,
  ProductDetails,
  ProductDescription,
  ProductPriceContainer
} from './productBox.style'
import CurrencyText from '../currencyText'

const ProductBox = ({ image, description, price }) => (
  <ProductContainer>
    <ProductImage src={image} />
    <ProductDetails>
      <ProductDescription>{description}</ProductDescription>
      <ProductPriceContainer>
        <CurrencyText value={price} />
      </ProductPriceContainer>
    </ProductDetails>
  </ProductContainer>
)

ProductBox.defaultProps = {
  image: '',
  description: '',
  price: 0
}

ProductBox.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number
}

export default ProductBox
