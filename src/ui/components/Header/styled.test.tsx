import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import * as S from './styled'

import theme from '../../theme'

describe('<Header /> styles', () => {
  it('<S.Header /> should have expected style rules', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <S.Header>Dummy content</S.Header>
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveStyleRule(
      'box-shadow',
      '0.1rem 0.1rem 0.5rem 0 rgba(0,0,29,0.22)'
    )
  })
})
