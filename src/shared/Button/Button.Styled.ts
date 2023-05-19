import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonsProps } from './Button.types'

const variantStyles = (theme: DefaultTheme, variant = 'primary') =>
  ({
    primary: css`
      background: ${theme.colors.primary[100]};
      color: #fff;
      &:hover {
        background: ${theme.colors.primary[200]};
      }
    `,
    dark: css`
      background: ${theme.colors.dark};
      color: #fff;
      &:hover {
        background: ${theme.colors.dark};
      }
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
  transition: all 300ms ease-in;
  ${({ theme, variant }) => variantStyles(theme, variant)}

  ${({ $block }) =>
    $block &&
    `
    width: 100%;
  `}
`
