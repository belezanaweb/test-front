import styled, { css } from 'styled-components'
import { TextProps } from '.'

type typographyProps = Omit<TextProps, 'children'>

export const Typography =
  styled.p <
  typographyProps >
  `
  ${({
    theme,
    color,
    fontSize,
    fontWeight,
    textAlign,
    lineHeight,
    textDecoration,
    letterSpacing
  }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes[fontSize]};
    font-weight: ${theme.font.Weight[fontWeight]};
    color: ${theme.colors[color]};
    text-align: ${textAlign || 'left'};
    line-height: ${lineHeight && theme.spacings[lineHeight]};
    text-decoration: ${textDecoration || 'none'};
    letter-spacing: ${letterSpacing && letterSpacing};
  `}
`
