import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../Header'
import { MemoryRouter } from 'react-router-dom'

describe('Test of Header', () => {
  test('Test if is rendering the header', () => {
    render(
      <MemoryRouter initialEntries={['/sacola']}>
        <Header />
      </MemoryRouter>
    )
    expect(screen.getByText('SACOLA')).toBeInTheDocument()
    expect(screen.getByText('PAGAMENTO')).toBeInTheDocument()
    expect(screen.getByText('CONFIRMAÇÃO')).toBeInTheDocument()
  })
})
