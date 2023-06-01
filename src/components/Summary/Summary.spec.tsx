import { Mock, describe, it, vi } from 'vitest'
import Summary from '.'
import { render, screen } from '@testing-library/react'
import useCart from '../../hooks/useCart'
import { mockCart } from '../../test/setup-test'
import { formatMoney } from '../../utils'


const mockActions = vi.fn().mockImplementation(() => <div>abla</div>)

vi.mock('../../hooks/useCart', () => ({
  default: vi.fn().mockImplementation(() => ({ data: mockCart, isLoading: true }))
}))

describe('Testing the Summary component', () => {
  it('should call the useCart hook', () => {
    render(<Summary renderAction={mockActions} />)
    expect(useCart).toHaveBeenCalled()
  })

  it('should call the renderActions function', () => {
    render(<Summary renderAction={mockActions} />)
    expect(mockActions).toHaveBeenCalled()
  })

  it('should render the renderActions return', () => {
    render(<Summary renderAction={mockActions} />)
    expect(mockActions).toHaveBeenCalled()
    expect(screen.getByText('abla')).toBeDefined()
  })

  it('should show a loading indicator if the hook returns loading state', () => {
    render(<Summary renderAction={mockActions} />)
    expect(screen.getByRole('alert', {busy: true})).toBeDefined()
  })

  it('should not show a loading indicator if the hook don\'t returns loading state', () => {
    (useCart as Mock).mockImplementation(() => ({ data: mockCart, isLoading: false, isError: false }))
    render(<Summary renderAction={mockActions} />)
    expect(screen.queryByRole('alert', {busy: true})).toBe(null)
  })

  it('should show formated monetary value', () => {
    (useCart as Mock).mockImplementation(() => ({ data: mockCart, isLoading: false, isError: false }))
    render(<Summary renderAction={mockActions} />)
    expect(screen.getByText(formatMoney(mockCart.discount))).toBeDefined()
    expect(screen.getByText(formatMoney(mockCart.shippingTotal))).toBeDefined()
    expect(screen.getByText(formatMoney(mockCart.subTotal))).toBeDefined()
    expect(screen.getByText(formatMoney(mockCart.total))).toBeDefined()
  })

  it('should show error message in case of error', () => {
    (useCart as Mock).mockImplementation(() => ({ data: mockCart, isLoading: false, isError: true }))
    render(<Summary renderAction={mockActions} />)
    expect(screen.getByText(/Não foi possível carregar as informações do carrinho./)).toBeDefined()
  })

  it('should show error message if data is undefined', () => {
    (useCart as Mock).mockImplementation(() => ({ data: undefined, isLoading: false, isError: false }))
    render(<Summary renderAction={mockActions} />)
    expect(screen.getByText(/Não foi possível carregar as informações do carrinho./)).toBeDefined()
  })
})
