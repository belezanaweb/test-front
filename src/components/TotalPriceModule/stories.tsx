import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { TotalPriceModule } from '.'

export default {
  title: 'TotalPriceModule',
  component: TotalPriceModule
}

export const Basic: Story = args => <TotalPriceModule {...args} />
