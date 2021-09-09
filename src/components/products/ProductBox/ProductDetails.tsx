import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IProduct } from '@/entities/Product'
import { styled } from '@/style/stitches.config'
import formatNumberToReal from '@/utils/formaNumberToReal'

const ProductDetailStyled = styled('div', {
  width: '100%',
  marginLeft: 10,
  color: '$gray400'
})

const ProductDetailNameStyled = styled('div', {
  fontSize: 13,
  marginBottom: 10
})

const ProductDetailPriceStyled = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  fontSize: 14,
  fontWeight: 'bold'
})

interface OwnProps {
  product: IProduct
}

function ProductDetail (props: OwnProps): JSX.Element {
  const { product } = props

  return (
    <ProductDetailStyled>
      <ProductDetailNameStyled>{product.name}</ProductDetailNameStyled>
      <ProductDetailPriceStyled>
        {' '}
        {formatNumberToReal(product.priceSpecification.price)}
      </ProductDetailPriceStyled>
    </ProductDetailStyled>
  )
}

export default ProductDetail
