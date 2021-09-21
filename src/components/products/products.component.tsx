import React, { FC } from 'react'
import { Card, Product } from 'components'

export const Products: FC<{ children?: never, thumbs?: boolean }> = ({ thumbs = false }) => {
  return (
    <Card>
      <Product
        title="Senscience Inner Restore Intensif - Máscara Capilar 50ml"
        price={42.95}
        picture="https://via.placeholder.com/100"
        size={thumbs ? 'small' : 'default'}
      />
      <Product
        title="Senscience Inner Restore Intensif - Máscara Capilar 50ml"
        price={42.95}
        picture="https://via.placeholder.com/100"
        size={thumbs ? 'small' : 'default'}
      />
      <Product
        title="Senscience Inner Restore Intensif - Máscara Capilar 50ml"
        price={-42.95}
        picture="https://via.placeholder.com/100"
        size={thumbs ? 'small' : 'default'}
      />
    </Card>
  )
}
