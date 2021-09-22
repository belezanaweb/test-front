import React, { FC } from 'react'
import { Card, Product } from 'components'
import { useCheckoutContext } from 'context/checkout.context'

export const Products: FC<{ children?: never, thumbs?: boolean }> = ({ thumbs = false }) => {
  const { products } = useCheckoutContext()
  return (
    <Card>
      {products.map((item) => (
        <Product {...item} size={thumbs ? 'small' : 'default'} key={item.title} />
      ))}
    </Card>
  )
}
