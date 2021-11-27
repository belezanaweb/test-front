import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { HeaderNav } from '.'

export default {
  title: 'HeaderNav',
  component: HeaderNav,
  parameters: {
    layout: 'fullscreen'
  }
}

export const Basic: Story = args => <HeaderNav {...args} />
