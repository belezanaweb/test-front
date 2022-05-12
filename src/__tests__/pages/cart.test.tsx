import React from 'react'
import { render, screen } from '../../util/test-utils'

import { Cart } from '../../pages/Cart'

jest.mock('../../components/InfoWrapper', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

jest.mock('../../components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menu" />
  }
}))

jest.mock('../../components/Product', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Product" />
  }
}))

jest.mock('../../components/Subtotal', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Subtotal" />
  }
}))

jest.mock('../../components/Button', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Button" />
  }
}))

jest.mock('../../components/Loader', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Loader" />
  }
}))

describe('Cart Page', () => {
  it('should render sections', () => {
    render(<Cart />)

    expect(screen.queryByTestId('Mock Showcase')).not.toBeInTheDocument()
    expect(screen.queryByTestId('Mock Menu')).not.toBeInTheDocument()
    expect(screen.queryByTestId('Mock Product')).not.toBeInTheDocument()
    expect(screen.queryByTestId('Mock Subtotal')).not.toBeInTheDocument()
    expect(screen.queryByTestId('Mock Button')).not.toBeInTheDocument()
    expect(screen.getByTestId('Mock Loader')).toBeInTheDocument()
  })
})
