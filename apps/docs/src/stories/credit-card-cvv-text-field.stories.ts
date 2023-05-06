import type { Meta, StoryObj } from '@storybook/react'

import { CreditCardCvvTextField } from 'ui'

const meta = {
  title: 'Components/CreditCardCvvTextField',
  component: CreditCardCvvTextField,
  tags: ['autodocs']
} satisfies Meta<typeof CreditCardCvvTextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'dueDate',
    onChange: (e) => console.log(e)
  }
}
