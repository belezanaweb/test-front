import React from 'react'
import PropTypes from 'prop-types'

import Card from '../Card'
import formatPrice from '../../helpers/formatPrice'

import * as S from './styles'

const ProductList = ({ productList, small }) => (
  <Card title="PRODUTOS">
    <S.ProductList>
      {productList.map(({ product }) => (
        <S.ProductItem key={product.sku}>
          <S.Picture small={small}>
            <source media="(min-width:768px)" srcSet={product.imageObjects[0].medium} />
            <img src={product.imageObjects[0].small} alt={product.name} />
          </S.Picture>
          <S.ProductDetails>
            <S.ProductName>{product.name}</S.ProductName>
            {!small && (
              <S.ProductPrice data-testid="product-price">
                {formatPrice(product.priceSpecification.price)}
              </S.ProductPrice>
            )}
          </S.ProductDetails>
        </S.ProductItem>
      ))}
    </S.ProductList>
  </Card>
)

ProductList.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        sku: PropTypes.string,
        name: PropTypes.string,
        priceSpecification: PropTypes.shape({
          price: PropTypes.number
        }),
        imageObjects: PropTypes.arrayOf(
          PropTypes.shape({
            small: PropTypes.string,
            medium: PropTypes.string
          })
        )
      })
    })
  ).isRequired,
  small: PropTypes.bool
}

ProductList.defaultProps = {
  small: false
}

export default ProductList
