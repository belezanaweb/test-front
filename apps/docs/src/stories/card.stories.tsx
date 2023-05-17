import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '@test-front/common-ui'

const meta = {
  title: 'CommonUi/Card',
  component: Card,
  tags: ['autodocs']
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

function DefaultCard() {
  return <Card>
    <p>this is a simple card</p>
    <p>this is a simple card</p>
    <p>this is a simple card</p>
    <p>this is a simple card</p>
    <p>this is a simple card</p>
    <p>this is a simple card</p>
    <p>this is a simple card</p>
  </Card>
}

export const Default: Story = {
  args: {
    children: ''
  },
  render: () => <DefaultCard />
}