import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Title from '.'

import theme from '../../theme'

describe('<Title />', () => {
  it('should render Title component', () => {
    render(
      <ThemeProvider theme={theme}>
        <Title>Produtos</Title>
      </ThemeProvider>
    )

    expect(screen.getByText(/produtos/i)).toBeInTheDocument()
  })

  it('should match a snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Title>Produtos</Title>
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
