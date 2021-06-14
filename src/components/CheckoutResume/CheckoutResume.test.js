import React from 'react'
import { render, screen } from '@testing-library/react'
import CheckoutResume from './CheckoutResume'

const CheckoutResumeDefaultProps = {
  productsPrice: 'R$ 1,00',
  freightPrice: 'R$ 2,00',
  discountPrice: 'R$ 3,00',
  totalPrice: 'R$ 4,00'
}

describe('CheckoutResume', () => {
  it('should render CheckoutResume', () => {
    const { container } = render(<CheckoutResume {...CheckoutResumeDefaultProps} />)

    container.firstChild

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render resume values based in props provided', () => {
    render(<CheckoutResume {...CheckoutResumeDefaultProps} />)

    expect(screen.getByText(CheckoutResumeDefaultProps.productsPrice)).toBeInTheDocument()
    expect(screen.getByText(CheckoutResumeDefaultProps.freightPrice)).toBeInTheDocument()
    expect(screen.getByText(CheckoutResumeDefaultProps.discountPrice)).toBeInTheDocument()
    expect(screen.getByText(CheckoutResumeDefaultProps.totalPrice)).toBeInTheDocument()
  })
})
