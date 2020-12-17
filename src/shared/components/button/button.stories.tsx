import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react/types-6-0'

import { IButtonProps } from './button.interface'
import { Button } from './button.component'

export default {
  title: 'Button',
  component: Button
}

const Template: Story<IButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'Button'
}
