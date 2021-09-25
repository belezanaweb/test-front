import React from 'react'
import { useSelector } from 'react-redux'

/**
 * Reducers
 */
import { selectCartProductsResponse } from '../../store/reducers/checkout'

/**
 * Helpers
 */
import { formatCoinStr } from '../../helpers'

/**
 * Components
 */
import { Title } from '../Utils/styles'
import Picture from '../Picture'

/**
 * Styles
 */
import {
  ContainerProducts,
  Wrapper,
  ProductWrapper,
  ProductImageWrapper,
  // ProductImage,
  ProductInfoWrapper,
  ProductInfoDescription,
  ProductInfoPrice
} from './styles'

const Products = () => {
  const cartProductsResponse = useSelector(selectCartProductsResponse)

  const resolveImages = (item) => {
    try {
      if (item?.product?.imageObjects?.length) {
        return item.product.imageObjects[0]
      }
      return null
    } catch (error) {
      console.log(error)
      return null
    }
  }

  return (
    <ContainerProducts>
      <Title>Products</Title>
      <Wrapper>
        {!!cartProductsResponse?.length &&
          cartProductsResponse.map((item, i) => (
            <ProductWrapper key={i}>
              <ProductImageWrapper>
                <Picture images={resolveImages(item)} />
              </ProductImageWrapper>
              <ProductInfoWrapper>
                <ProductInfoDescription>{item?.product?.name}</ProductInfoDescription>
                <ProductInfoPrice>
                  {formatCoinStr(item?.product?.priceSpecification?.price)}
                </ProductInfoPrice>
              </ProductInfoWrapper>
            </ProductWrapper>
          ))}
      </Wrapper>
    </ContainerProducts>
  )
}

export default Products
