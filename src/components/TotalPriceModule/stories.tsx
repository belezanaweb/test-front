import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { TotalPriceModule, TotalPriceModuleProps } from '.'

export default {
  title: 'TotalPriceModule',
  component: TotalPriceModule
}

export const Basic: Story<TotalPriceModuleProps> = args => <TotalPriceModule {...args} />

Basic.args = {
  products: 600,
  freightage: 5,
  discount: 30.9,
  total: 565
}
