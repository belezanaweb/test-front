import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CardSummary from '.'
import { MemoryRouter } from 'react-router-dom'

describe('CardSummary Component', () => {
  it('render the component', () => {
    render(<CardSummary />, { wrapper: MemoryRouter })

    expect(screen.getByText(/TOTAL/i)).toBeInTheDocument()
    expect(screen.getByText(/DESCONTO/i)).toBeInTheDocument()
    expect(screen.getByText(/FRETE/i)).toBeInTheDocument()
    expect(screen.getByText(/PRODUTOS/i)).toBeInTheDocument()
  })
})
