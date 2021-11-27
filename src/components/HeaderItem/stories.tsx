import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { HeaderItem, HeaderItemProps } from '.'

export default {
  title: 'HeaderItem',
  component: HeaderItem
}

export const Basic: Story<HeaderItemProps> = args => <HeaderItem {...args} />

Basic.args = {
  title: {
    name: 'nome1',
    status: true
  }
}
