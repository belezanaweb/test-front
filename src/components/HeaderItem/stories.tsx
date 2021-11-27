import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { HeaderItem, ItemProps } from '.'

export default {
  title: 'HeaderItem',
  component: HeaderItem
}

export const Basic: Story<ItemProps> = args => <HeaderItem {...args} />

Basic.args = {
  name: 'nome1',
  status: true
}
