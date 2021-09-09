import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IProduct } from '@/entities/Product'
import { styled } from '@/style/stitches.config'

import ProductImage from './ProductImage'
import ProductDetail from './ProductDetails'

const ProductBoxStyled = styled('div', {
  display: 'flex',
  alignItems: 'center',
  border: '1px solid $gray100',
  borderRadius: '2px',
  padding: '10px',
  marginY: '10px'
})

interface OwnProps {
  product: IProduct
}

function ProductBox (props: OwnProps): JSX.Element {
  const { product } = props

  return (
    <ProductBoxStyled>
      <ProductImage product={product} />
      <ProductDetail product={product} />
    </ProductBoxStyled>
  )
}

export default ProductBox
