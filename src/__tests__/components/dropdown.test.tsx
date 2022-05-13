import React from 'react'
import Dropdown from '../../components/Dropdown'
import { render, screen } from '../../util/test-utils'

describe('Dropdown Component', () => {
  it('should render correctly', () => {
    const { container } = render(<Dropdown />)

    const svgEl = container.querySelector(
      "[data-icon='body']"
    ) as HTMLImageElement

    expect(svgEl).toBeInTheDocument()
  })

  it('should render hidden buttons', () => {
    render(<Dropdown />)

    expect(screen.getByText(/ACESSIBILIDADE/i)).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Tema Padrão' })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /Tema escuro/i })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /Alto contraste/i })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /Aumentar fontes/i })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /Fechar/i })
    ).not.toBeInTheDocument()
  })
})
