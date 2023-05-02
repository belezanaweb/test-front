import { afterEach, describe, it, vi } from 'vitest'
import CardPayment from './CardPayment'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const mockState = {
  cardNumber: '',
  cardOwner: '',
  cardExpirationDate: '',
  cardSecurityCode: ''
}

const handleFormChange = vi.fn()

describe('Testing the CardPayment component', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })
  it('should render the inputs', () => {
    render(<CardPayment state={mockState} actions={{ handleFormChange }} />)
    expect(screen.getByPlaceholderText('0000 0000 0000 0000')).toBeDefined()
    expect(screen.getByPlaceholderText('Nome impresso no cartão')).toBeDefined()
    expect(screen.getByPlaceholderText('MM/AA')).toBeDefined()
    expect(screen.getByPlaceholderText('000')).toBeDefined()
  })

  it('should call handleFormChange when a input is changed', async () => {
    render(<CardPayment state={mockState} actions={{ handleFormChange }} />)
    await userEvent.type(screen.getByPlaceholderText('0000 0000 0000 0000'), '1')
    expect(handleFormChange).toHaveBeenCalled()
  })

  it('should render the error messages for each one of the inputs', () => {
    const errors = ['cardNumber', 'cardOwner', 'cardExpirationDate', 'cardSecurityCode']
    render(<CardPayment state={mockState} actions={{ handleFormChange }} errorArray={errors} />)
    expect(screen.getByText('insira um número de cartão válido')).toBeDefined()
    expect(screen.getByText('insira um nome válido')).toBeDefined()
    expect(screen.getByText('insira uma data válida')).toBeDefined()
    expect(screen.getByText('insira um CVV válido')).toBeDefined()
  })
})
