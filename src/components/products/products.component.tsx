import React, { FC } from 'react'
import { Card, Product, Title } from 'components'
import { useCheckoutContext } from 'context/checkout.context'

export const Products: FC<{ children?: never, thumbs?: boolean }> = ({ thumbs = false }) => {
  const { products } = useCheckoutContext()
  return (
    <div>
      <Title>Produtos</Title>
      <Card>
        {products.map((item) => (
          <Product {...item} size={thumbs ? 'small' : 'default'} key={item.title} />
        ))}
      </Card>
    </div>
  )
}
