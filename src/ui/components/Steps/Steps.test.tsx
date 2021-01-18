import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router'
import { ThemeProvider } from 'styled-components'

import theme from '../../theme'

import StepBar from './'

describe('<StepBar />', () => {
  it('should render StepBar component', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={theme}>
          <Route component={(routerProps: any) => <StepBar {...routerProps} />} path="/" />
        </ThemeProvider>
      </MemoryRouter>
    )

    expect(screen.getByText(/Sacola/i)).toBeInTheDocument()
  })

  it('should match a snapshot', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={theme}>
          <Route component={(routerProps: any) => <StepBar {...routerProps} />} path="/" />
        </ThemeProvider>
      </MemoryRouter>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
