import React, { FC } from 'react'
import { Card, Title } from 'components'
import { ProductSkeleton } from 'components/product/product.skeleton'

export const ProductsSkeleton: FC<{ children?: never, thumbs?: boolean }> = ({ thumbs = false }) => {
  return (
    <div>
      <Title>Produtos</Title>
      <Card>
        <ProductSkeleton size={thumbs ? 'small' : 'default'} />
        <ProductSkeleton size={thumbs ? 'small' : 'default'} />
        <ProductSkeleton size={thumbs ? 'small' : 'default'} />
      </Card>
    </div>
  )
}
