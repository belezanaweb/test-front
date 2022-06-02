import React from 'react'

import { PriceComponent } from './styles'

export type Props = {
  children: string | string[]
  type?: 'total' | 'discount'
}

function Price({ children, type }: Props) {
  return <PriceComponent type={type}>{children}</PriceComponent>
}

export default Price
