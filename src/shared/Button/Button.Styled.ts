import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonsProps } from './Button.types'

const variantStyles = (theme: DefaultTheme, variant = 'primary') =>
  ({
    primary: css`
      background: ${theme.colors.primary.main};
      color: #fff;
    `,
    dark: css`
      background: ${theme.colors.dark};
      color: #fff;
    `
  }[variant])

export const ButtonStyled =
  styled.button <
  ButtonsProps >
  `
  font-family: 'Arial', sans-serif;
  border-radius: 4px;
  padding: 16px 20px;
  border: 0;
  display: block;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  ${({ theme, variant }) => variantStyles(theme, variant)}

  ${({ $block }) =>
    $block &&
    `
    width: 100%;
  `}
`
