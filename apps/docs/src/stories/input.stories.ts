import type { Meta, StoryObj } from '@storybook/react'
import { InputField } from '@test-front/common-ui'

const meta = {
  title: 'CommonUi/InputField',
  component: InputField,
  tags: ['autodocs']
} satisfies Meta<typeof InputField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Nome impresso no cartão'
  }
}

export const Invalid: Story = {
  args: {
    errorText: 'nome inválido',
    placeholder: 'Nome impresso no cartão'
  }
}

export const WithLabel: Story = {
  args: {
    label: 'Nome do titular do cartão',
    placeholder: 'Nome impresso no cartão'
  }
}

export const WithMask: Story = {
  args: {
    label: 'Número',
    placeholder: '0000 0000 0000 0000',
    mask: "9999 9999 9999 9999"
  }
}