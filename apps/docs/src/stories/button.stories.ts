import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@test-front/common-ui'

const meta = {
  title: 'CommonUi/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Seguir para o pagamento'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Seguir para o pagamento',
    intent: 'secondary'
  }
}
