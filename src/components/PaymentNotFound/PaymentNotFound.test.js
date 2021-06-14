import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'

import renderWithRouter from '../../jest/renderWithRouter'
import PaymentNotFound from './PaymentNotFound'

describe('PaymentNotFound', () => {
  it('should render PaymentNotFound', () => {
    const { container } = renderWithRouter(<PaymentNotFound />)

    container.firstChild

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should redirect to cart when button is clicked', () => {
    const history = createMemoryHistory()
    renderWithRouter(<PaymentNotFound />, history)

    fireEvent.click(screen.getByRole('button'))

    expect(history.location.pathname).toBe('/cart')
  })
})
