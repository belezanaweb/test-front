import React from 'react'

import { PriceComponent } from './styles'

export type Props = {
  children: string | string[]
  type?: 'total' | 'discount'
  product?: boolean
}

function Price({ children, type, product }: Props) {
  return (
    <PriceComponent type={type} product={product && product}>
      {type === 'discount' ? '- ' + children : children}
    </PriceComponent>
  )
}

export default Price
