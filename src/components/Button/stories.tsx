import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { Button } from '.'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'fullscreen'
  }
}

export const Basic: Story = args => <Button {...args} />
