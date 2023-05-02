import { afterEach, describe, it, vi } from 'vitest'
import TextInput from './TextInput'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const mockState = {
  cardNumber: '',
  cardOwner: '',
  cardExpirationDate: '',
  cardSecurityCode: ''
}

const handleFormChange = vi.fn()

describe('Testing the TextInput component', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should call handleFormChange when a input is changed', async () => {
    render(
      <TextInput
        labelText="Número"
        name="cardNumber"
        hasError={false}
        placeholder="0000 0000 0000 0000"
        mask="9999 9999 9999 9999"
        value={''}
        onChange={handleFormChange}
        errorMessage="insira um número de cartão válido"
      />
    )
    await userEvent.type(screen.getByPlaceholderText('0000 0000 0000 0000'), '1')
    expect(handleFormChange).toHaveBeenCalled()
  })

  it('should render the error messages for each one of the inputs', () => {
    render(
      <TextInput
        labelText="Número"
        name="cardNumber"
        hasError={true}
        placeholder="0000 0000 0000 0000"
        mask="9999 9999 9999 9999"
        value={''}
        onChange={handleFormChange}
        errorMessage="insira um número de cartão válido"
      />
    )
    expect(screen.getByText('insira um número de cartão válido')).toBeDefined()
  })
})
