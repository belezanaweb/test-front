import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { TotalPrice, TotalPriceProps } from '.'

export default {
  title: 'TotalPrice',
  component: TotalPrice
}

export const Basic: Story<TotalPriceProps> = args => <TotalPrice {...args} />

Basic.args = {
  title: 'Produto',
  price: 624.8,
  isNegative: false,
  isTotal: false
}
