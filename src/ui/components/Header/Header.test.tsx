import React from 'react'
import { MemoryRouter, Route } from 'react-router'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Header from './'
// import * as S from './styled'
import theme from '../../theme'

let container: any

describe('<Header />', () => {
  beforeAll(() => {
    container = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={theme}>
          <Route component={(routerProps: any) => <Header {...routerProps} />} path="/" />
        </ThemeProvider>
      </MemoryRouter>
    )
  })

  it('should match the snapshot', () => {
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should have styled header', () => {})
  it('should have step component inside styled header', () => {})
})
