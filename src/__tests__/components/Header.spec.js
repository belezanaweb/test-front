import React from 'react'

import { render } from '@testing-library/react'

import { Header } from '../../components/Header'
import { MemoryRouter } from 'react-router'

describe('Header component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    expect(getByText('Sacola')).toBeInTheDocument()
    expect(getByText('Confirmação')).toBeInTheDocument()
    expect(getByText('Pagamento')).toBeInTheDocument()
  })
})
