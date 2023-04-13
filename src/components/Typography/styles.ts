import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'

export type TypographyProps = {
  color?: keyof typeof theme.colors
  size?: keyof typeof theme.fontSizes
  fontFamily?: keyof typeof theme.fontFamilies
  fontWeight?: 100 | 400 | 700,
  textDecoration?: 'underline' | 'line-through' | 'none'
  margin?: string
}

export const Heading = styled('h1')<TypographyProps>`
  ${({
    color = 'black',
    size = 'xLarge',
    fontWeight = 700,
    fontFamily = 'primary',
    margin = '0px'
  }) => css`
    font-size: ${theme.fontSizes[size]};
    color: ${theme.colors[color]};
    font-family: ${theme.fontFamilies[fontFamily]};
    font-weight: ${fontWeight};
    font-style: normal;
    margin: ${margin};
  `}
`

export const TextBody = styled('span')<TypographyProps>`
  ${({
    color = 'black',
    size = 'small',
    fontWeight = 400,
    fontFamily = 'primary',
    textDecoration = 'none',
    margin = '0px'
  }) => css`
    font-size: ${theme.fontSizes[size]};
    color: ${theme.colors[color]};
    font-family: ${theme.fontFamilies[fontFamily]};
    font-weight: ${fontWeight};
    line-height: 16px;
    text-decoration: ${textDecoration};
    margin: ${margin};
  `}
`
