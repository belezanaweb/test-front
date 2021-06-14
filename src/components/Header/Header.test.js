import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'

import renderWithRouter from '../../jest/renderWithRouter'
import Header from './Header'

describe('Header', () => {
  it('should render Header', () => {
    const { container } = renderWithRouter(<Header />)

    container.firstChild

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should navbar items', () => {
    renderWithRouter(<Header />)

    expect(screen.getByText(/sacola/i)).toBeInTheDocument()
    expect(screen.getByText(/pagamento/i)).toBeInTheDocument()
    expect(screen.getByText(/confirmação/i)).toBeInTheDocument()
  })

  it('should render active className based in url', () => {
    const history = createMemoryHistory()
    const { container } = renderWithRouter(<Header />, history)

    expect(container.querySelector('.active')).not.toBeInTheDocument()

    fireEvent.click(screen.getByText(/sacola/i))

    expect(history.location.pathname).toBe('/cart')

    expect(container.querySelector('.active')).toBeInTheDocument()
  })
})
