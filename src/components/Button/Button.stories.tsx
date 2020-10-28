import React, { ButtonHTMLAttributes, FC } from 'react'

import Button from '.'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
  args: {
    disabled: false
  }
}

export const Default = (args: FC<ButtonHTMLAttributes<HTMLButtonElement>>) => (
  <Button {...args}>Finalizar pedido</Button>
)
