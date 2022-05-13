import React from 'react'
import Empty from '../../components/Empty'
import userEvent from '@testing-library/user-event'
import { render, screen } from '../../util/test-utils'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Empty Component', () => {
  it('should render correctly', () => {
    render(
      <Router>
        <Empty />
      </Router>
    )

    expect(
      screen.getByRole('img', { name: /Two empty bags/i })
    ).toBeInTheDocument()

    expect(
      screen.getByText(/Eita! Parece que ainda não foi feita nenhuma compra./i)
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /Que tal conferir nossos produtos?/i })
    ).toBeInTheDocument()

    userEvent.click(
      screen.getByRole('button', { name: /Que tal conferir nossos produtos?/i })
    )
  })
})
