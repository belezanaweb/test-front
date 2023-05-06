import type { Meta, StoryObj } from '@storybook/react'

import { CreditCardDueDateTextField } from 'ui'

const meta = {
  title: 'Components/CreditCardDueDateTextField',
  component: CreditCardDueDateTextField,
  tags: ['autodocs']
} satisfies Meta<typeof CreditCardDueDateTextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'creditCard',
    onChange: (e) => console.log(e)
  }
}
