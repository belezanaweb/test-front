import type { Meta, StoryObj } from '@storybook/react'

import { CreditCardTextField } from 'ui'

const meta = {
  title: 'Components/CreditCardTextField',
  component: CreditCardTextField,
  tags: ['autodocs']
} satisfies Meta<typeof CreditCardTextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'creditCard',
    onChange: (e) => console.log(e)
  }
}
