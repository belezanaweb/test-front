import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import * as S from './styled'

import theme from '../../theme'

describe('<Steps /> styles', () => {
  it('<S.Steps /> should have expected style rules', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <S.Steps>Dummy content</S.Steps>
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveStyleRule('display', 'flex')
    expect(container.firstChild).toHaveStyleRule('justify-content', 'space-between')
    expect(container.firstChild).toHaveStyleRule('padding', '1.2rem 2.5rem')
  })

  describe('<S.Step />', () => {
    it('should have expected style rules with active status', () => {
      const { container } = render(
        <ThemeProvider theme={theme}>
          <S.Step isActive>Dummy content</S.Step>
        </ThemeProvider>
      )

      expect(container.firstChild).toMatchSnapshot()
      expect(container.firstChild).toHaveStyleRule('color', theme.colors.primaryLight)
      expect(container.firstChild).toHaveStyleRule('font-size', '1.3rem')
      expect(container.firstChild).toHaveStyleRule('font-weight', 'bold')
      expect(container.firstChild).toHaveStyleRule('transition', 'color 0.2s ease 0s')
      expect(container.firstChild).toHaveStyleRule('text-transform', 'uppercase')
    })

    it('should use base color when is inactive', () => {
      const { container } = render(
        <ThemeProvider theme={theme}>
          <S.Step isActive={false}>Dummy content</S.Step>
        </ThemeProvider>
      )

      expect(container.firstChild).toMatchSnapshot()
      expect(container.firstChild).toHaveStyleRule('color', theme.colors.base)
    })
  })
})
