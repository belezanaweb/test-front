import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe } from 'vitest'
import { CreditCardInput } from './CreditCardInput'


describe('<CreditCardInput>', () => {
  beforeEach(() => {
    render(<CreditCardInput />)
  })

  test('should show error message when user not type valid number', async () => {
    const numberInput = screen.getByRole('textbox', { name: /número/i})
    expect(screen.queryByText(/insira um número de cartão válido/i)).toBeFalsy()
    await userEvent.type(numberInput, '11')
    await userEvent.clear(numberInput)
    expect(screen.getByText(/insira um número de cartão válido/i)).toBeVisible()
  })

  test('should show error message when user not type valid value', async () => {
    const nameInput = screen.getByRole('textbox', { name: /nome do titular do cartão/i})
    await userEvent.type(nameInput, 'aa')
    await userEvent.clear(nameInput)
    expect(screen.getByText(/insira um nome válido/i)).toBeVisible()
  })

  test('should show error message when user not type valid expiration date', async () => {
    const nameInput = screen.getByRole('textbox', { name: /data de validade/i})
    await userEvent.type(nameInput, '11')
    await userEvent.clear(nameInput)
    expect(screen.getByText(/insira uma data válida/i)).toBeVisible()
  })

  test('should show error message when user not type valid cvv code', async () => {
    const nameInput = screen.getByRole('textbox', {  name: /código cvv:/i})
    await userEvent.type(nameInput, '11')
    await userEvent.clear(nameInput)
    expect(screen.getByText(/insira um cvv válido/i)).toBeVisible()
  })
})
