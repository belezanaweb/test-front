import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'

export type TypographyProps = {
  color?: keyof typeof theme.colors
  size?: keyof typeof theme.fontSizes
  fontFamily?: keyof typeof theme.fontFamilies
  fontWeight?: 100 | 400 | 700,
  textDecoration?: 'underline' | 'line-through' | 'none'
}

export const Heading = styled('h1')<TypographyProps>`
  ${({
    color = 'black',
    size = 'medium',
    fontWeight = 700,
    fontFamily = 'primary'
  }) => css`
    font-size: ${theme.fontSizes[size]};
    color: ${theme.colors[color]};
    font-family: ${theme.fontFamilies[fontFamily]};
    font-weight: ${fontWeight};
    margin-block-start: 0;
    margin-block-end: 0;
  `}
`

export const TextBody = styled('span')<TypographyProps>`
  ${({
    color = 'black',
    size = 'small',
    fontWeight = 400,
    fontFamily = 'primary',
    textDecoration = 'none',
  }) => css`
    font-size: ${theme.fontSizes[size]};
    color: ${theme.colors[color]};
    font-family: ${theme.fontFamilies[fontFamily]};
    font-weight: ${fontWeight};
    line-height: 16px;
    text-decoration: ${textDecoration};
  `}
`
