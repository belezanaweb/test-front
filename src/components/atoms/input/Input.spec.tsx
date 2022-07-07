import React, { ChangeEvent } from 'react'
import { FormMessages } from '../../../constants/formMessages'
import { render, fireEvent } from '../../../test-utils'
import { formatCreditCard } from '../../../utils/mask'
import { Input, InputProps } from './Input'

const creditCardNumber = '1111222233334444'

const renderComponent = ({ label, onChange = jest.fn(), error }: InputProps) =>
  render(<Input label={label} onChange={onChange} error={error} />)

describe('Input', () => {
  test('renders correctly', async () => {
    const { getByText, getByRole } = renderComponent({
      label: 'cartão de crédito',
      error: FormMessages.required
    })

    getByText(/cartão de crédito/i)
    getByText(/Campo obrigatório/i)

    const input = getByRole('textbox') as HTMLInputElement
    await fireEvent.change(input, { target: { value: creditCardNumber } })

    expect(input.value).toBe(creditCardNumber)
  })

  test('formats value correctly', async () => {
    const onChangeAction = (event: ChangeEvent<HTMLInputElement>) => {
      const { target } = event
      target.value = formatCreditCard(target.value)
    }
    const { getByText, getByRole } = renderComponent({
      label: 'cartão de crédito',
      onChange: onChangeAction
    })

    getByText(/cartão de crédito/i)

    const input = getByRole('textbox') as HTMLInputElement
    await fireEvent.change(input, { target: { value: creditCardNumber } })

    expect(input.value).toBe('1111.2222.3333.4444')
  })
})
