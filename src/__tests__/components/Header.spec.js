import { render, screen } from '@testing-library/react'
import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import { Header } from '../../components'

describe('Testing Header.js', () => {
  it('should be able render header', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <Header />
      </Router>
    )

    expect(screen.getByText(/Sacola/i)).toBeTruthy()
    expect(screen.getByText(/Pagamento/i)).toBeTruthy()
    expect(screen.getByText(/Confirmação/i)).toBeTruthy()
  })
})
