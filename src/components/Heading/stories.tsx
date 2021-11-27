import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { Heading, HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading
}

export const Basic: Story<HeadingProps> = args => <Heading {...args} />

Basic.args = {
  title: 'Produtos'
}
