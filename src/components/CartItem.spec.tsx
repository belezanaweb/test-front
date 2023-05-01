import { afterEach, describe, it, vi } from 'vitest'
import CartItem from './CartItem'
import { render, screen } from '@testing-library/react'
import { mockProduct } from '../test/setup-test'

describe('Testing the CarItem component', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })
  it('should render the product name', () => {
    render(<CartItem product={mockProduct} />)
    expect(screen.getByText('test')).toBeDefined()
  })

  it('should render the product price', () => {
    render(<CartItem product={mockProduct} />)
    expect(screen.getByText('10,00')).toBeDefined()
  })

  it('should render the product max price', () => {
    render(<CartItem product={mockProduct} />)
    expect(screen.getByText('11,00')).toBeDefined()
  })

  it('should not render the product max price if discount is 0', () => {
    const localMockProduct = { ...mockProduct }
    localMockProduct.priceSpecification.discount = 0
    render(<CartItem product={localMockProduct} />)
    expect(screen.queryByText('11,00')).toBe(null)
  })

  it('should render the product price if showPrice=false', () => {
    render(<CartItem product={mockProduct} showPrice={false} />)
    expect(screen.queryByText('10,00')).toBe(null)
  })
})
