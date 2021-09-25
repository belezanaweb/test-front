import React from 'react'

/**
 * Helpers
 */
import { formatCoinStr } from '../../helpers'

/**
 * Components
 */
import { Title } from '../Utils/styles'

/**
 * Styles
 */
import {
  ContainerProducts,
  Wrapper,
  ProductWrapper,
  ProductImageWrapper,
  ProductImage,
  ProductInfoWrapper,
  ProductInfoDescription,
  ProductInfoPrice
} from './styles'

const Products = ({ products = [] }) => {
  console.log('Products products:', products)

  return (
    <ContainerProducts>
      <Title>Products</Title>
      <Wrapper>
        {!!products?.length &&
          products.map((item, i) => (
            <ProductWrapper key={i}>
              <ProductImageWrapper>
                <ProductImage src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png" />
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
