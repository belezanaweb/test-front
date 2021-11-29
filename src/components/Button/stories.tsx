import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'fullscreen'
  }
}

export const Basic: Story<ButtonProps> = args => <Button {...args} />

Basic.args = {
  text: 'finalizar pedido'
}
