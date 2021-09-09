import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IProduct } from '@/entities/Product'
import { styled } from '@/style/stitches.config'

const ProductImageStyled = styled('img', {
  width: '65px'
})

interface OwnProps {
  product: IProduct
}

function ProductImage (props: OwnProps): JSX.Element {
  const { product } = props

  return (
    <div>
      <ProductImageStyled src={product.imageObjects[0].small}></ProductImageStyled>
    </div>
  )
}

export default ProductImage
