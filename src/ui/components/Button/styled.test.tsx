import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import * as S from './styled'

import theme from '../../theme'

describe('<Header /> styles', () => {
  it('<S.Header /> should have expected style rules', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <S.Button>Dummy content</S.Button>
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveStyleRule('background-color', theme.colors.primary)
    expect(container.firstChild).toHaveStyleRule('border', 'none')
    expect(container.firstChild).toHaveStyleRule('border-radius', '0.3rem')
    expect(container.firstChild).toHaveStyleRule(
      'box-shadow',
      `inset 0 -0.3rem 0 0 ${theme.colors.primaryDark}, 0 0.2rem 0.4rem 0`
    )
    expect(container.firstChild).toHaveStyleRule('color', theme.colors.baseLight)
    expect(container.firstChild).toHaveStyleRule('cursor', 'pointer')
    expect(container.firstChild).toHaveStyleRule('font-size', '2rem')
    expect(container.firstChild).toHaveStyleRule('font-weight', 'bold')
    expect(container.firstChild).toHaveStyleRule('letter-spacing', '0.05rem')
    expect(container.firstChild).toHaveStyleRule('line-height', '2.4rem')
    expect(container.firstChild).toHaveStyleRule('margin', 'auto')
    expect(container.firstChild).toHaveStyleRule('padding', '1.8rem 0')
    expect(container.firstChild).toHaveStyleRule('transition', 'background-color 0.3s ease')
    expect(container.firstChild).toHaveStyleRule('text-align', 'center')
    expect(container.firstChild).toHaveStyleRule('text-decoration', 'none')
    expect(container.firstChild).toHaveStyleRule('text-transform', 'uppercase')
    expect(container.firstChild).toHaveStyleRule('width', '100%')

    // Hover
    expect(container.firstChild).toHaveStyleRule('background-color', theme.colors.primaryDark, {
      modifier: ':hover'
    })

    // Disabled
    expect(container.firstChild).toHaveStyleRule('background-color', theme.colors.base, {
      modifier: ':disabled'
    })
    expect(container.firstChild).toHaveStyleRule('box-shadow', 'none', {
      modifier: ':disabled'
    })
    expect(container.firstChild).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled'
    })
  })
})
