import React from 'react'

import CartTable from '.'

export default {
  title: 'Components/CartTable',
  component: CartTable
}

export const Default: React.FC<{}> = () => (
  <CartTable subTotal={500} shippingTotal={10} discount={20} total={600} />
)
