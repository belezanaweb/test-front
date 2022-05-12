import React from 'react'
import Menu from '../../components/Menu'
import theme from '../../styles/theme'
import userEvent from '@testing-library/user-event'
import { render, screen } from '../../util/test-utils'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Menu Component', () => {
  it('should render the menu', () => {
    render(<Menu />)

    expect(screen.getByRole('button', { name: /SACOLA/i })).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /PAGAMENTO/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /CONFIRMAÇÃO/i })
    ).toBeInTheDocument()
  })

  it('should render the menu with an active link defined', () => {
    render(<Menu activeLink="/success" />)

    expect(screen.getByRole('button', { name: /CONFIRMAÇÃO/i })).toHaveStyle({
      color: theme.colors.primary
    })
  })

  it('should redirect the user when clicked', () => {
    render(
      <Router>
        <Menu activeLink="/success" />
      </Router>
    )

    userEvent.click(screen.getByRole('button', { name: /SACOLA/i }))

    userEvent.click(screen.getByRole('button', { name: /PAGAMENTO/i }))

    userEvent.click(screen.getByRole('button', { name: /CONFIRMAÇÃO/i }))
  })
})
