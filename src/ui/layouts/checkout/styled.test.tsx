import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import * as S from './styled'

import theme from '../../theme'

describe('<Main /> styles', () => {
  it('<S.Main /> should have expected style rules', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <S.Main>Dummy content</S.Main>
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveStyleRule('padding', '0 1rem')
    expect(container.firstChild).toHaveStyleRule('padding', '0 2rem', {
      media: '(min-width: 360px)'
    })
    expect(container.firstChild).toHaveStyleRule('padding', '0 3rem', {
      media: '(min-width:768px)'
    })
  })
})
