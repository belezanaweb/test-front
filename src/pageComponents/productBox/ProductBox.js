import React from 'react'
import PropTypes from 'prop-types'
import {
  ProductsContainer,
  ProductContainer,
  ProductImage,
  ProductDetails,
  ProductDescription,
  ProductPriceContainer
} from './productBox.style'
import CurrencyText from '../../components/currencyText'

const ProductBox = ({ products, showPrice }) => {
  if (products && products.length > 0) {
    return (
      <ProductsContainer>
        {products.map(({ product }) => (
          <ProductContainer key={product.sku}>
            <ProductImage src={product.imageObjects[0].medium} />
            <ProductDetails>
              <ProductDescription>{product.name}</ProductDescription>
              {showPrice && (
                <ProductPriceContainer>
                  <CurrencyText value={product.priceSpecification.price} />
                </ProductPriceContainer>
              )}
            </ProductDetails>
          </ProductContainer>
        ))}
      </ProductsContainer>
    )
  }
  return <></>
}

ProductBox.defaultProps = {
  products: [],
  showPrice: true
}

ProductBox.propTypes = {
  products: PropTypes.arrayOf(PropTypes.any),
  showPrice: PropTypes.bool
}

export default ProductBox
