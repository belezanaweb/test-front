import React from 'react'
import { Success } from '../../pages/Success'
import { render, screen } from '../../util/test-utils'

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

jest.mock('../../components/CartSuccess', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock CartSuccess" />
  }
}))

jest.mock('../../components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />
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
    render(<Success />)

    expect(screen.queryByTestId('Mock Showcase')).not.toBeInTheDocument()
    expect(screen.queryByTestId('Mock Menu')).not.toBeInTheDocument()
    expect(screen.queryByTestId('Mock Product')).not.toBeInTheDocument()
    expect(screen.queryByTestId('Mock Subtotal')).not.toBeInTheDocument()
    expect(screen.queryByTestId('Mock CartSuccess')).not.toBeInTheDocument()
    expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument()
    expect(screen.getByTestId('Mock Loader')).toBeInTheDocument()
  })
})
