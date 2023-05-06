import type { Meta, StoryObj } from '@storybook/react'

import { Button } from 'ui'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Seguir para o pagamento'
  }
}

export const Black: Story = {
  args: {
    children: 'Seguir para o pagamento',
    color: 'black'
  }
}

export const Loading: Story = {
  args: {
    children: 'Seguir para o pagamento',
    isLoading: true
  }
}
