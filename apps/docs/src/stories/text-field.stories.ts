import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from 'ui'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs']
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Nome impresso no cartão'
  }
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    placeholder: 'Nome impresso no cartão'
  }
}

export const Label: Story = {
  args: {
    id: 'nomeImpresso',
    label: 'Nome impresso no cartão'
  }
}

export const HelperText: Story = {
  args: {
    isInvalid: true,
    placeholder: 'Nome impresso no cartão',
    helperText: 'nome inválido'
  }
}
