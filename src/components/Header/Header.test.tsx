import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router'
import { ThemeProvider } from 'styled-components'

import Header from './'
import theme from '../../theme'

describe('<Header />', () => {
  it('should match a snapshot', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={theme}>
          <Route component={(routerProps: any) => <Header {...routerProps} />} path="/" />
        </ThemeProvider>
      </MemoryRouter>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
