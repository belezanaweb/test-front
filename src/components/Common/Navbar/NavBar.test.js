import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NavBar from '.'
import { MemoryRouter } from 'react-router-dom'

describe('NavBar Component', () => {
  it('render the component', () => {
    render(<NavBar />, { wrapper: MemoryRouter })

    expect(screen.getByRole('link', { name: /sacola/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /pagamento/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /confirmação/i })).toBeInTheDocument()
  })
})
